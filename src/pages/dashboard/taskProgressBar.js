function TaskProgressBar(props){
  return (
    <div className="flex mt-2">
      <p style={textStyle} className="mr-2 font-medium text-gray-500">{props.value}% tasks completed</p>
      <span className="border-4 w-10 h-0 rounded-tl-md rounded-bl-md border-purple-700 inline-block"></span>
      <span className="border-4 w-14 h-0 inline-block rounded-tr-md rounded-br-md"></span>
    </div>
  )
}

let textStyle={
  fontSize:'0.6rem',
  lineHeight:'0.5rem'
}

export default TaskProgressBar