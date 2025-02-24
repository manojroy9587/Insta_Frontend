import React from 'react'
import ProfileTop from '../../components/profilecomponent/ProfileTop'
import ProfileMiddle from '../../components/profilecomponent/ProfileMiddle'
import ProfileMiddleBox from '../../components/profilecomponent/ProfileMiddleBox'
import ProfileBottom from '../../components/profilecomponent/ProfileBottom'

function Profile() {
  return (
    <div className="p-1 w-[320px] bg-gray-50 h-screen">
        <ProfileTop/>
        <ProfileMiddle/>
        <ProfileMiddleBox/>
        <ProfileBottom/>
    </div>
  )
}

export default Profile