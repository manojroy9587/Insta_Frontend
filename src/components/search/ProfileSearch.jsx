import React from 'react'
import { RxCross2 } from "react-icons/rx";
import photo from "../../assets/profile.jpeg"

function ProfileSearch() {
  return (
    <div className='px-2 flex items-center justify-between my-3'>
        <div className='flex items-center gap-2'><img src={photo} alt="" className='w-10 rounded-full'/>
        <div className=''><p className='text-sm font-semibold text-gray-00'>Ratan Maghi</p>
        <p className='text-xs text-gray-500'>Sagarika's vatar😂</p></div></div>
        <span className='text-sm text-gray-800 cursor-pointer'><RxCross2 />
        </span>
    </div>
  )
}

export default ProfileSearch