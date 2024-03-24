import { Route,Routes,  BrowserRouter, Navigate } from "react-router-dom"
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"
import Single from "./pages/Single/Single"
import New from "./pages/New/New"
import List from "./pages/List/List"
import { productInputs, userInputs } from "./formSource"
import "./style/dark.scss"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"


function App(){
    
    const currentUser = useContext(AuthContext).currentUser
    console.log(currentUser)

    const RequiredAuth = ({children})=>{
        return currentUser!=null ? (children) : <Navigate to ="/login"/>
    }


    return(
        <>
        <div >

       
            <BrowserRouter>
              <Routes>
                <Route path="/" >
                    <Route index element={<RequiredAuth> <Home /></RequiredAuth>}/> 
                    <Route path="login" element={<Login/>} />
                    <Route path="users">     {/* doing nesting of the routes inside the users/:userId, users/new */}
                        <Route index element={<RequiredAuth><List/></RequiredAuth>}/> {/* at the users path will be existing the list */}
                        <Route path=":userId" element={<RequiredAuth> <Single/> </RequiredAuth>}/>
                        <Route path="new" element={<RequiredAuth><New inputs= {userInputs} title="Add New User" /></RequiredAuth>}/>
                    </Route>

                    <Route path="products">
                        <Route index element={<RequiredAuth> <List /></RequiredAuth>}/>
                        <Route path=":indexId" element ={<RequiredAuth><New input= {productInputs} title="Add New Product" /></RequiredAuth>}/>
                      </Route>
                 </Route>    
              </Routes>
            
            </BrowserRouter>
            </div>
        
        </>
    )
}

export default App

