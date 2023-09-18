'use client'

import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Inbox, Loader } from "lucide-react";
import { uploadToS3 } from '@/lib/s3';
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query"
import axios from 'axios';


const FileUpload = () => {
  const [uploading, setUploading] = useState(false);
  const { mutate, isLoading } = useMutation({
    mutationFn: async ({ file_key, file_name }: { file_key: string, file_name: string}) => {
      const response = await axios.post('api/create-chat', {
        file_key,
        file_name
      });
      return response.data;
    } 
  })

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      console.log(acceptedFiles);

      const file = acceptedFiles[0];
      if (file.size > 10 * 1024**2) {
        // bigger than 10MB
        toast.error("File size must be smaller than 10MB");
        return;
      }

      try {
        setUploading(true);
        const data = await uploadToS3(file);
        if (!data?.file_key || !data.file_name) {
          toast.error("Something went wrong");
          return
        }
        mutate(data, {
          onSuccess: () => {
            toast.success("Upload complete")
          },
          onError: (err) => {
            toast.error("Error creating chat")
            console.error(err);
          }
        })
      } catch (err) {
        console.log(err);
        toast.error("Error. Please try again.")
      } finally {
        setUploading(false);
      }
      
    }
  });

  return (
    <div className='p-1 sm:p-2 sm:w-1/2 sm:h-1/4 rounded-xl bg-white border-gray-50 border-2'>
      <div 
        {...getRootProps()} 
        className='border-dashed border-2 rounded-xl cursor-pointer flex justify-center items-center h-full bg-gray-50 flex-col p-8'
      >
        <input {...getInputProps()} />
        {uploading || isLoading ? (
          <>
            {/* loading */}
            <Loader className='animate-spin h-10 w-10' />
            <p>Loading PDF file</p>
          </>
        ) : (
          <>
            <Inbox className='h-6 sm:h-10 w-6 sm:w-10 text-blue-700' />
            <p className='capitalize mt-2 sm:text-[14px] text-[10px] text-gray-400 text-center'>Drop your PDF here</p>
          </>
        )}
      </div>
    </div>
  )
}

export default FileUpload