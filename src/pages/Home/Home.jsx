
import "./home.scss"
import Navbar from "../../components/Navbar/Navbar"
import SideBar from "../../components/Sidebar/Sidebar"

function Home(){
    return(
        <>
        <div className="home">
          <SideBar/>
          <div className="homeContainer">container</div>
        </div>
         
        </>
    )
}

export default Home
