
import "./home.scss"
import Navbar from "../../components/Navbar/Navbar"
import SideBar from "../../components/Sidebar/Sidebar"
import Widget from "../../components/widget/Widget"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"

function Home(){


    return(
        <>
        <div className="home">
          <SideBar/>
         
          <div className="homeContainer">
              <Navbar/>
              <div className="widgets">
                  <Widget type="user"/>
                  <Widget type="order"/>
                  <Widget type="earning" />
                  <Widget type="balance"/>

              </div>

              <div className="charts">
                      <Featured/>
                      <Chart/>
              </div>

            </div>
        </div>
         
        </>
    )
}

export default Home
