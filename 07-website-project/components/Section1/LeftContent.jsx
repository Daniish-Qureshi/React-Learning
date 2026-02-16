import React from 'react'
import { MoveUpRight } from 'lucide-react'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col w-1/3 justify-between'>
      <div className='p-6'>
        <h3 className='mb-7 text-7xl font-bold'>Prospective
        <br /> <span>Customer</span> <br />Segmentation</h3>
        <p className='text-xl font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium deserunt corrupti repellendus sequi nihil repellat quod dolor quas, labore neque exercitationem officia. Perspiciatis aliquid odit mollitia sequi, recusandae officia voluptas?</p>
      </div>
      <div className='text-9xl'>
        <MoveUpRight />
      </div>

    </div>
  )
} 

export default LeftContent