'use client'
import React, { useState } from 'react'
import { useDropzone } from "react-dropzone";
import { Upload, Loader2 } from 'lucide-react';
import { uploadToS3 } from '@/lib/s3';
import { toast } from "react-hot-toast"
import { useMutation } from "@tanstack/react-query";
import axios from 'axios';
import { useRouter } from 'next/navigation';

const FileUpload = () => {
  const router = useRouter();
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const { mutate, isLoading } = useMutation({
    mutationFn: async ({ file_key, file_name }: { file_key: string, file_name: string }) => {
      const response = await axios.post('/api/create-chat', {
        file_key, file_name
      })

      return response.data;
    }
  })

  const { getInputProps, getRootProps } = useDropzone({
    accept: {'application/pdf': ['.pdf']},
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0]
      if (file.size > 10 * 1024**2) {
        toast.error("File must be smaller than 10MB")
      }

      try {
        setIsUploading(true);
        const data = await uploadToS3(file);
        if (!data?.file_key || !data.file_name) {
          toast.error('Something went wrong')
          return;
        }

        mutate(data, {
          onSuccess: ({ chat_id }) => {
            toast.success("Chat created!")
            router.push(`/chat/${chat_id}`)
          },
          onError: (err) => {
            console.log(err);
            toast.error("Error creating chat")
          }
        })
        console.log("data:", data)
      } catch (error) {
        console.error(error);
        toast.error('internal Error: 500')
      } finally {
        setIsUploading(false);
      }

    }
  });

  return (
    <div className='rounded-lg h-1/4 w-1/3 p-2 bg-[#fafafa] border-0'>
      <div {...getRootProps()} className='bg-slate-200 rounded-lg h-full items-center justify-center cursor-pointer border-dashed border-2 border-black flex flex-col gap-2'>
        <input {...getInputProps()} />
        {isLoading || isUploading ? (
          <>
            <Loader2 className='h-[35px] w-[35px] animate-spin' />
            <p className='text-[1.25rem]'>Loading...</p>
          </>
        ) : (
          <>
            <Upload className='h-[35px] w-[35px]' />
            <p className='text-[1.25rem]'>Drop PDF Here</p>
          </>
        )}
      </div>
    </div>
  )
}

export default FileUpload