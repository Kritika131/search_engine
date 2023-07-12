import {TbGridDots} from "react-icons/tb"
import ProfileRing from "../assets/profile-ring.png"
import Profile from "../assets/profile.jpg"

const ProfileIcon = () => {
  return (
    <div className="flex gap-2 items-center">
    <span className="h-10 w-10 flex items-center justify-center rounder-full cursor-pointer hover:bg-black/[0.05]">
      <TbGridDots size={20} color="#5f6368"/>
    </span>
    <span className="h-8 w-8 relative flex justify-center items-center">
      <img src={ProfileRing} alt="" className="absolute" />
      <span className="h-6 w-6 rounded-full overflow-hidden">
          <img src={Profile} alt="" className="h-full w-full object-cover" />
      </span>
    </span>
   </div> 
    )
}

export default ProfileIcon