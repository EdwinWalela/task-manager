import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLightbulb } from "@fortawesome/free-solid-svg-icons"
import { faKey } from "@fortawesome/free-solid-svg-icons"


function Card(){
  return (
    <div className="w-2/5 last:w-3/5 mt-10 mx-3 p-6 shadow-lg shadow-blue-300 bg-blue-500 rounded-lg last:bg-red-500 last:shadow-red-300">
      <FontAwesomeIcon icon={faLightbulb} size="md" className="text-white bg-black bg-opacity-30 p-2 px-3 rounded-lg" />
      <h3 className="font-xs my-4 text-white">R&D for New Banking Mobile App</h3>
      <img src="https://picsum.photos/200" className="w-8 h-8 rounded-full border-2 border-white inline-block -mr-2"/>
      <img src="https://picsum.photos/200" className="w-8 h-8 rounded-full border-2 border-white inline-block -mr-2"/>
      <img src="https://picsum.photos/200" className="w-8 h-8 rounded-full border-2 border-white inline-block "/>
    </div>
  )
}

export default Card