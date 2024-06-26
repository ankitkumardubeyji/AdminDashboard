import SideBar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"
import Chart from "../../components/chart/Chart"
import "./single.scss"
import Tables from "../../components/table/Tables"
function Single(){
    return(
        <>
        <div className="single">
            <SideBar/>
            <div className="singleContainer">
                <Navbar/>
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <div className="title">Information</div>
                    
                        <div className="item">
                            <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="itemImg"/>
                            <div className="details">
                                <h1 className="itemTitle">Jane Doe</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">janedoe@gmail.com</span>
                                </div>

                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">@gmail.com</span>
                                </div>

                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">123456</span>
                                </div>

                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">Deoghar</span>
                                </div>

                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">India</span>
                                </div>
                            </div>
                        </div>
                     

                    </div>
                    <div className="right">
                        <Chart aspect={3/1} title="USER Spending(Last 6 Months)" />
                    </div>

                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <Tables/>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Single
