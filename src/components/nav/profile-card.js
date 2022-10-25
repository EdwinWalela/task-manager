function ProfileCard(){
  return (
    <div className="flex pt-5">
      <img src="https://picsum.photos/id/237/200" className="w-16 h-16 rounded-full mr-3 drop-shadow-lg"/>
      <div className="self-center">
        <p className="text-base font-semibold tracking-wide">Edwin Walela</p>
        <p style={titleStyle}className="text-sm font-semibold font-medium tracking-wide">Software Engineer</p>
      </div>
    </div>
  )
}

let titleStyle = {
  'font-size':'10px'
}

export default ProfileCard