import MenuItem from "./menu-item"

function Menu(props){
  return (
    <div className="mt-10">
      <h3 className="text-lg font-semibold tracking-wide text-gray-500 mb-6 px-6">Menu</h3>
      <MenuItem title="Tasks" notificationCount={0} active={true}/>
      <MenuItem title="Inbox" notificationCount={12}/>
      <MenuItem title="Projects" notificationCount={0}/>
      <MenuItem title="Meetings"  notificationCount={2}/>
      <MenuItem title="Settings"  notificationCount={0}/>
    </div>
  )
}

export default Menu