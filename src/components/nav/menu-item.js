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

  let active

  return (
    <div className="flex my-6">
      <FontAwesomeIcon className="pr-6 text-gray-500" icon={icons[props.title]} size="lg"/>
      <p className="text-gray-500 flex-1">{props.title}</p>
      {props.notificationCount>0 && props.notificationCount <= 10 &&
        <p className="px-2 py-1 text-white text-xs font-bold rounded-md" style={notificationCountStyle}>{props.notificationCount}</p>
      }
      
      {props.notificationCount>10 &&
        <p className="px-2 py-1 text-white text-xs font-bold rounded-md" style={notificationCountStyle}>+10</p>
      }
     
     
    </div>
  )
}

let notificationCountStyle = {
  backgroundColor:'red'
}

export default MenuItem