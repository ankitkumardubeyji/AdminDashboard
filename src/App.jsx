import { Route,Routes,  BrowserRouter } from "react-router-dom"
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"
import Single from "./pages/Single/Single"
import New from "./pages/New/New"
import List from "./pages/List/List"


function App(){

    return(
        <>
        <div className="App">

       
            <BrowserRouter>
              <Routes>
                <Route path="/" >
                    <Route index element={<Home/>}/> 
                    <Route path="login" element={<Login/>}/>
                    <Route path="users">     {/* doing nesting of the routes inside the users/:userId, users/new */}
                        <Route index element={<List/>}/> {/* at the users path will be existing the list */}
                        <Route path=":userId" element={<Single/>}/>
                        <Route path="new" element={<New/>}/> 
                    </Route>

                    <Route path="products">
                        <Route index element={<List/>}/>
                        <Route path=":indexId" element ={<New/>}/>
                      </Route>
                 </Route>    
              </Routes>
            
            </BrowserRouter>
            </div>
        
        </>
    )
}

export default App

