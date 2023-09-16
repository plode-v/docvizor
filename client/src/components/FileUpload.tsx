'use client'

import React from 'react'
import { useDropzone } from 'react-dropzone'
import { Inbox } from "lucide-react";

const FileUpload = () => {

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles)
    }
  });

  return (
    <div className='p-1 sm:p-2 sm:w-1/2 sm:h-1/4 rounded-xl bg-white border-gray-50 border-2'>
      <div 
        {...getRootProps()} 
        className='border-dashed border-2 rounded-xl cursor-pointer flex justify-center items-center h-full bg-gray-50 flex-col p-8'
      >
        <input {...getInputProps()} />
        <>
        <Inbox className='h-6 sm:h-10 w-6 sm:w-10 text-blue-700' />
        <p className='capitalize mt-2 sm:text-[14px] text-[10px] text-gray-400 text-center'>Drop your PDF here</p>
        </>
      </div>
    </div>
  )
}

export default FileUpload