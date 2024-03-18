import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import FullScreenOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import NotificationNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined"
import ChatBubbleOutlineOutlined from "@mui/icons-material/ChatBubbleOutlineOutlined"
import ListOutlinedIcon from "@mui/icons-material/ListOutlined"

import "./Navbar.scss"
import { FullscreenExitOutlined } from "@mui/icons-material"
function Navbar(){
    return(
        <>
          <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" name="" id="" placeholder="search" />
                    <SearchOutlinedIcon className="icon"/>
                </div>

                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className="icon"/>
                        English
                    </div>

                    <div className="item">
                        <DarkModeOutlinedIcon className="icon"/>
                    </div>

                    <div className="item">
                        <FullscreenExitOutlined className="icon"/>
                    </div>

                    <div className="item">
                        <FullscreenExitOutlined className="icon"/>
                    </div>

                    <div className="item">
                        <NotificationNoneOutlinedIcon className="icon"/>
                        <div className="counter">1</div>
                    </div>

                    <div className="item">
                        <ChatBubbleOutlineOutlined className="icon"/>
                        <div className="counter">1</div>
                    </div>

                    <div className="item">
                        <ListOutlinedIcon className="icon"/>
                    </div>

                    <div className="item">
                        <img src="/assets/founder.jpg" alt="" className="avatar"/>
                    </div>
                </div>
            </div>
          </div>

        </>
    )
}

export default Navbar