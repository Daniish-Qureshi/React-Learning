import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const PageContent = () => {
  return (
    <div className='py-10 flex items-center justify-between px-18 h-[90vh]'>
      <LeftContent />
      <RightContent />
      
    </div>
  )
}

export default PageContent