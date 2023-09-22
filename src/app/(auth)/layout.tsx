import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex items-center justify-center h-screen w-screen bg-neutral-200'>
        {children}
    </div>
  )
}

export default layout