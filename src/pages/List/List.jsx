import Navbar from "../../components/Navbar/Navbar"
import SideBar from "../../components/Sidebar/Sidebar"
import Datatable from "../../components/datatable/Datatable"
import "./list.scss"


function List(){

    return(
        <div className="list">
            <SideBar/>
            <div className="listContainer">
                <Navbar/>
                <Datatable/>
            </div>
        </div>
    )
}

export default List

