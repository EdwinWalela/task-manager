function ProfileCard(){
  return (
    <div className="flex p-2">
      <img src="https://picsum.photos/id/237/200" className="w-12 h-12 rounded-full m-2 mr-3 drop-shadow-lg"/>
      <div className="self-center">
        <p className="text-xs font-semibold tracking-wide">Edwin Walela</p>
        <p style={titleStyle}className="text-xs font-semibold font-medium tracking-wide">Software Engineer</p>
      </div>
    </div>
  )
}

let titleStyle = {
  'font-size':'8px'
}

export default ProfileCard