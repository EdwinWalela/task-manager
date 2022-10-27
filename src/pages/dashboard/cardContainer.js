import GreetingBar from "./greetingBar"
import TaskProgressBar from "./taskProgressBar"

function CardContainer(){
  return (
    <div className="flex">
      <GreetingBar username={"Edwin"}/>
      <TaskProgressBar value={15}/>
    </div>
  )
}

export default CardContainer