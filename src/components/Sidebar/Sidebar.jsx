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

function SideBar(){
    return(
        <>
 <div className="sidebar">
       
    <div className="top">
         <span className="logo">MrDubeyji</span>
    </div>

<hr/>
    <div className="center">
        <ul>
            <p className="title">Main</p>
            <li><DashboardIcon className="icon"/><span>Dashboard</span></li>

            <p className="title">Lists</p>
            <li><GroupIcon className="icon"/><span>Users</span></li>
            <li><GroupIcon className="icon"/><span>Products</span></li>
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
</div> 
        </>
    )

}
export default SideBar;
