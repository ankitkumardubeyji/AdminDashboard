import KeyboardArrowUpIcon from "@mui/icons-material/keyboardArrowUp"
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./widget.scss"
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { MonetizationOn } from "@mui/icons-material";
import { useState,useEffect } from "react";

function Widget({type}){
    const [amount, setAmount] = useState(null);
    const [diff, setDiff] = useState(null);
   

// temporary 
let data = {}


    switch(type){
        case "user":
            data = {
                title:"USERS",
                isMoney:"false",
                link:"See All users",
                icon: <PersonIcon className="icon" style={{backgroundColor:"rgba(255,0,0,0.2)"}}/>
            };
            break;

            case "order":
                data = {
                    title:"ORDERS",
                    isMoney:"false",
                    link:"View All orders ",
                    icon: <ShoppingCartIcon className="icon"  style={{backgroundColor:"rgba(255,0,0,0.2)", color:"goldenrod"}}/>
                };
                break;

                case "earning":
                    data = {
                        title:"EARNINGS",
                        isMoney:"true",
                        link:"View net Earnings ",
                        icon: <MonetizationOn className="icon"  style={{backgroundColor:"rgba(255,0,0,0.2)", color:"green"}} />
                    };
                    break;  
                
                    case "balance":
                        data = {
                            title:"BALANCE",
                            isMoney:"true",
                            link:"Details",
                            icon: <AccountBalanceWalletIcon className="icon" style={{backgroundColor:"rgba(255,0,0,0.2)" , color:"purple"}} />
                        };
                        break;



    }

    useEffect(() => {
        const fetchData = async () => {
          const today = new Date();
          const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
          const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));
    
          const lastMonthQuery = query(
            collection(db, data.query),
            where("timeStamp", "<=", today),
            where("timeStamp", ">", lastMonth)
          );
          const prevMonthQuery = query(
            collection(db, data.query),
            where("timeStamp", "<=", lastMonth),
            where("timeStamp", ">", prevMonth)
          );
    
          const lastMonthData = await getDocs(lastMonthQuery);
          const prevMonthData = await getDocs(prevMonthQuery);
    
          setAmount(lastMonthData.docs.length);
          setDiff(
            ((lastMonthData.docs.length - prevMonthData.docs.length) / prevMonthData.docs.length) *
              100
          );
        };
        fetchData();
      }, []);


    return(
        <>
            <div className="widget">
            <div className="left">
                <span className="title">{Date.title}</span>
                <span className="counter">{data.isMoney && "$"}{amount}</span>
                <span className="link">{data.link} </span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon/>
                    {diff}%
                </div>
                    {data.icon}
              
            </div>
            </div>
           
        </>
    )
}

export default Widget;