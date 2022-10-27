import ProfileCard from "./profile-card"
import Menu from "./menu"

function Nav(){
  return (
    <div className="bg-gray-50 border-r-4 border-gray-100 container w-64 min-h-screen px-0 w-1/4">
      <ProfileCard/>
      <Menu />
    </div>
  )
}

export default Nav