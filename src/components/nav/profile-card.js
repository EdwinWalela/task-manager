function ProfileCard(){
  return (
    <div className="flex m-3">
      <img src="https://picsum.photos/id/237/200" className="w-12 h-12 rounded-full m-2 mr-3 drop-shadow-lg"/>
      <div className="self-center">
        <p className="text-sm font-semibold">Edwin Walela</p>
        <p className="text-xs font-semibold font-medium">Software Engineer</p>
      </div>
    </div>
  )
}

let profileStyle = {
  width:'100px'
}

export default ProfileCard