'use client'

import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Inbox } from "lucide-react";
import { uploadToS3 } from '@/lib/s3';
import axios from 'axios'


const FileUpload = () => {
  // const { getRootProps, getInputProps } = useDropzone({
  //   accept: { "application/pdf": [".pdf"] },
  //   maxFiles: 1,
  //   onDrop: async (acceptedFiles) => {
  //     if (acceptedFiles.length === 0) {
  //       // FIXME: Get error toast
  //       return;
  //     }

  //     console.log(acceptedFiles);
  //     const file = acceptedFiles[0];

  //     if (file.size > 10 * 1024**2) {
  //       // bigger than 10MB
  //       alert("Pleas upload file that's smaller than 10MB.")
  //       return
  //     }

  //     try {
  //       const data = await uploadToS3(file);
  //       console.log('data', data);
  //     } catch (err) {
  //       console.log(err);
  //       alert("An error had occured, please try again.")
  //     }
      
  //   }
  // });

  const onDrop = useCallback(async (accpetedFiles: File[]) => {
    const file = accpetedFiles[0];
    const reader = new FileReader();

    reader.onerror = () => console.log("error loading file")
    reader.onabort = () => console.log("file uploading error")
    reader.onload = async () => {
      const buffer = reader.result as ArrayBuffer;

      // send buffer to Next api route for analysis
      const { data } = await axios.post('/api/openai', buffer);

      console.log('analysis result:', data.analysis);
    }

  }, [])

  const { getRootProps, getInputProps } = useDropzone({ onDrop, maxFiles: 1 });

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