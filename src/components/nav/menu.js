import MenuItem from "./menu-item"

function Menu(props){
  return (
    <div className="mt-10">
      <h3 className="text-lg font-semibold tracking-wide text-gray-500 mb-6 px-6 cursor-pointer">Menu</h3>
      <MenuItem title="Tasks" notificationCount={0} active={true}/>
      <MenuItem title="Inbox" notificationCount={12} active={false}/>
      <MenuItem title="Projects" notificationCount={0} active={false}/>
      <MenuItem title="Meetings"  notificationCount={2} active={false}/>
      <MenuItem title="Settings"  notificationCount={0} active={false}/>
    </div>
  )
}

export default Menu