import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faList } from "@fortawesome/free-solid-svg-icons"
import { faMessage } from "@fortawesome/free-solid-svg-icons"
import { faDraftingCompass } from "@fortawesome/free-solid-svg-icons"
import { faCalendar } from "@fortawesome/free-solid-svg-icons"
import { faSliders } from "@fortawesome/free-solid-svg-icons"

function MenuItem(props){

  let icons = {
    'Tasks':faList,
    'Inbox':faMessage,
    'Projects':faDraftingCompass,
    'Meetings':faCalendar,
    'Settings':faSliders
  }

  return (
    <div className={`flex py-3 px-6 mb-2 cursor-pointer group transition-all duration-200 ease-out hover:border-l-4 border-purple-700 ${props.active ? "border-l-4 border-purple-700":""}`}>
      <FontAwesomeIcon className={`pr-6 text-gray-500 group-hover:text-purple-700 ${props.active ? "text-purple-700":""}`} icon={icons[props.title]} size="lg"/>
      <p className={`text-gray-400 font-medium flex-1 ${!props.active ? "hover:scale-95 ":""}  ${props.active ? "text-purple-700":""} transition-all duration-200 ease-out group-hover:text-purple-700`}>{props.title}</p>
      {props.notificationCount>0 && props.notificationCount <= 10 &&
        <p className="px-2 py-1 text-white text-xs font-bold rounded-md bg-purple-700">{props.notificationCount}</p>
      }
      {props.notificationCount>10 &&
        <p className="px-1 py-1 text-white text-xs font-bold rounded-md bg-purple-700">+10</p>
      }
     
     
    </div>
  )
}

let notificationCountStyle = {
  backgroundColor:'red'
}

export default MenuItem