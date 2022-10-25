import ProfileCard from "./profile-card"
import Menu from "./menu"

function Nav(){
  return (
    <div className="border-r-2 container w-64 min-h-screen px-6">
      <ProfileCard/>
      <Menu />
    </div>
  )
}

export default Nav