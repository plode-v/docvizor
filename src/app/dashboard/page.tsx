'use client'
import React from 'react'
import axios from 'axios';

const page = () => {

    const handlePost = async () => {
        const response = await axios.post("/api/create-chat")

        console.log(response)
    }

  return (
    <div>
        dashboard
        <button onClick={handlePost}>click me</button>
    </div>
  )
}

export default page