import SideBar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"
import "./new.scss"
import { DriveFolderUploadOutlined } from "@mui/icons-material"
import { useState } from "react"


function New({title,input}){

    const [file,setFile] = useState("");
    console.log(file)
    return(
       <>
           <div className="new">
                <SideBar/>
                <div className="newContainer">
                    <Navbar/>
                    <div className="top">
                        <h1>{title}</h1>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <img src= {
                                file? URL.createObjectURL(file):"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                             alt="" />
                        </div>
                        <div className="right">
                            <form >

                                <div className="formInput">
                                    <label htmlFor="file">
                                       Image: <DriveFolderUploadOutlined className="icon"/>
                                    </label>
                                    <input type="file" id="file" onChange={e =>setFile(e.target.files[0])} style={{display:"none"}}/>
                                </div>
                                
                                {input.map((inp)=>(
                                    <div className="formInput" key={inp.id}>
                                            <label>{inp.label}</label>
                                    <input type = {inp.type} placeholder={inp.placeholder}/>
                                    </div>
                                    
                                ))}
                              

                               
                                
                                <button>send</button>
                            </form>

                        </div>
                    </div>

                </div>
              
           </div>
       </>
    )
   }
   
   export default New
   
   