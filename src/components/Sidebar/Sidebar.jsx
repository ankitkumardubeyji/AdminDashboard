import "./Sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SystemSecurityUpdateGoodIcon from '@mui/icons-material/SystemSecurityUpdateGood';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import BarChartIcon from '@mui/icons-material/BarChart';
import PortraitIcon from '@mui/icons-material/Portrait';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";



function SideBar(){
    const {dispatch} = useContext(AuthContext)
    function handleLogout(e){
        e.preventDefault()
        dispatch({type:"LOGOUT"})

    }
    
    return(
        <>
 <div className="sidebar">
       
    <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
         <span className="logo">MrDubeyji</span>
         </Link>

    </div>

<hr/>
    <div className="center">
        <ul>
            <p className="title">Main</p>
            <li><DashboardIcon className="icon"/><span>Dashboard</span></li>
            <Link to="/users" style={{textDecoration:"none"}}>
            <p className="title">Lists</p>
            <li><GroupIcon className="icon"/><span>Users</span></li>
            </Link>

            <Link to="/products" style={{textDecoration:"none"}}>
            <li><GroupIcon className="icon"/><span>Products</span></li>
            </Link>

            
            <li><LocalShippingIcon className="icon"/><span>Orders</span></li>
            <li><LocalShippingIcon className="icon"/><span>Delivery</span></li>
         
            <p className="title">Useful</p>
            <li><BarChartIcon className="icon"/><span>Stats</span></li>
            <li><NotificationsNoneIcon className="icon"/><span>Notifications</span></li>

            <p className="title">Service</p>
            <li><SystemSecurityUpdateGoodIcon className="icon"/><span>System Health</span></li>
            <li><SystemSecurityUpdateGoodIcon className="icon"/><span>Logs</span></li>
            <li><SettingsSuggestIcon className="icon"/><span>Settings</span></li>

            <p className="title">User</p>
            <li><PortraitIcon className="icon"/><span>Profile</span></li>
            <li><LogoutIcon className="icon"/><span>Logout</span></li>
        </ul>
    </div>

    <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
       
     

    </div>

    <button onClick={handleLogout}>Logout</button>
</div> 
        </>
    )

}
export default SideBar;
