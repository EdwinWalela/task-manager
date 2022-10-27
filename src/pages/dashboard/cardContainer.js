import GreetingBar from "./greetingBar"
import TaskProgressBar from "./taskProgressBar"
import Card from "./card"
import React from "react"

function CardContainer(){
  return (
    <>
      <div className="flex">
        <GreetingBar username={"Edwin"}/>
        <TaskProgressBar value={15}/>
      </div>
      <div className="flex">
        <Card />
        <Card />
      </div>
    </>
  )
}

export default CardContainer