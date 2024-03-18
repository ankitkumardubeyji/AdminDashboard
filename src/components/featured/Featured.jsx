import { MoreVert } from "@mui/icons-material"
import "./featured.scss"
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

// for buffering we may use the icon circular progress bar.
function Featured(){
    return(
        <>           
            <div className="features">

                <div className="top">
                    <h1 className="title">Total Revenue</h1>
                    <MoreVert  fontSize = "small" />
                </div>

                <div className="bottom">
                    <div className="featuredChart">
                        <CircularProgressbar value={70} text ={"70%"} strokeWidth={5}/>
                    </div>

                    <p className="title">Total sales made today</p>
                    <p className="amount">$420</p>
                    <p className="desc">Previous transactions processing . Last Payments may not be included </p>

                    <div className="summary">
                        <div className="item">

                        </div>
                        
                    </div>

                </div>
            
            </div>
        </>
    )
}

export default Featured

