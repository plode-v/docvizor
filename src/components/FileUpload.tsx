
'use client'
import { Upload, Loader2 } from 'lucide-react';
import React, { useState } from 'react'
import { useDropzone } from "react-dropzone";
import { uploadToS3 } from '@/lib/s3';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast'
import axios from 'axios';
import { useRouter } from 'next/navigation';

const FileUpload = () => {
    const router = useRouter();
    const [isUploading, setIsUploading] = useState<boolean>(false);
    const { mutate, isLoading } = useMutation({
        mutationFn: async ({ 
            file_key, file_name 
        } : { 
        file_key: string, 
        file_name: string 
        }) => {
            const response = await axios.post('/api/create-chat', { file_key, file_name });
            return response.data;

        }
    })

    const { getRootProps, getInputProps } = useDropzone({
        accept: { "application/pdf": [".pdf"] },
        maxFiles: 1,
        onDrop: async (accpetedFiles) => {
            const file = accpetedFiles[0];
            if (file.size > 10 * 1024**2) {
                toast.error("File must be smaller than 10MB")
                return;
            }

            try {
                setIsUploading(true);
                const data = await uploadToS3(file);
                if (!data?.file_key || !data.file_name) {
                    toast.error("Something went wrong");
                    return;
                }

                mutate(data, {
                    onSuccess: ({ chat_id }) => {
                        // console.log(data);
                        toast.success("Chat has been created")
                        // router.push(`chat/${chat_id}`)
                        console.log(chat_id);
                    },
                    onError: (err) => {
                        console.log(err);
                        toast.error("Error creating chat")
                    }
                })
                console.log("data: ", data);
            } catch(err) {
                console.error(err);
                toast.error("Internal Error: 500")
            } finally {
                setIsUploading(false);
            }
        }
    })

  return (
    <div className='h-1/3 w-1/3 p-2 bg-gray-100 rounded-md'>
        <div {...getRootProps({
            className: "border border-dashed h-full border-gray-300 border-2 flex items-center justify-center flex-col cursor-pointer rounded-md"
        })}>
            <input {...getInputProps()} />
            {isLoading || isUploading ? (
                <>
                    <Loader2 className='animate-spin h-[30px] w-[30px] text-gray-500 mb-3' />
                    <p className='capitalize font-[500] text-neutral-400'>Uploading...</p>
                </>
            ) : (
                <>
                    <Upload className='h-[30px] w-[30px] text-gray-500 mb-3' />
                    <p className='capitalize font-[500] text-neutral-400'>drop PDF file here</p>
                </>
            )}
        </div>
    </div>
  )
}

export default FileUpload