
'use client'
import { Inbox } from 'lucide-react';
import React from 'react'
import { useDropzone } from "react-dropzone";

const FileUpload = () => {

    const { getRootProps, getInputProps } = useDropzone({
        accept: { "application/pdf": [".pdf"] },
        maxFiles: 1,
        onDrop: (accpetedFiles) => {
            console.log(accpetedFiles[0]);

        }
    })

  return (
    <div className='h-1/3 w-1/3 p-2 bg-gray-100 rounded-md'>
        <div {...getRootProps({
            className: "border border-dashed h-full border-gray-300 border-2 flex items-center justify-center flex-col cursor-pointer"
        })}>
            <input {...getInputProps()} />
            <Inbox className='h-[30px] w-[30px] text-slate-800' />
            <p className='capitalize font-[500] text-neutral-400'>drop PDF file here</p>
        </div>
    </div>
  )
}

export default FileUpload