'use client'
import Image from 'next/image'
import React from 'react'

export const LogoImg = () => {
  return (
    <div className='flex items-center'>
      <Image
        width={43}
        height={50}
        className='w-[43px] h-[50px]'
        alt=''
        src={'/logo.png'}
      />
      <p className='font-medium'>InsightBridge</p>
    </div>
  )
}
