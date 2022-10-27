import Nav from "../../components/nav"
import CenterContainer from "./centerContainer"

function Dashboard(){
  return(
    <div className="flex">
      <Nav />
      <CenterContainer />
      <Nav />
    </div>
  )
}

export default Dashboard