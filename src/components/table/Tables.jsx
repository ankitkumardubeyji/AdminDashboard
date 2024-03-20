import "./table.scss"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Tab } from "@mui/material";

function Tables(){

    let rows=[
        {
            id:1143155,
            product:" Acer Metro 5",
            img:"https://tse1.mm.bing.net/th?id=OIP.QOqTcI5zp2L5GAZDpgf4ogHaFK&pid=Api&P=0&h=180",
            customer:"JOHN SMITY",
            date:"1 March",
            amount:785,
            method:"cash on delivery",
            status:"Approved"
        },

        {
            id:1143154,
            product:" Acer Metro 5",
            img:"https://tse1.mm.bing.net/th?id=OIP.QOqTcI5zp2L5GAZDpgf4ogHaFK&pid=Api&P=0&h=180",
            customer:"JOHN SMITY",
            date:"1 March",
            amount:785,
            method:"cash on delivery",
            status:"Pending"
        },
        
        {
            id:1143157,
            product:" Acer Metro 5",
            img:"https://tse1.mm.bing.net/th?id=OIP.QOqTcI5zp2L5GAZDpgf4ogHaFK&pid=Api&P=0&h=180",
            customer:"JOHN SMITY",
            date:"1 March",
            amount:785,
            method:"cash on delivery",
            status:"Approved"
        },
        

        {
            id:1143158,
            product:" Acer Metro 5",
            img:"https://tse1.mm.bing.net/th?id=OIP.QOqTcI5zp2L5GAZDpgf4ogHaFK&pid=Api&P=0&h=180",
            customer:"JOHN SMITY",
            date:"1 March",
            amount:785,
            method:"cash on delivery",
            status:"Pending"
        },
        

        {
            id:1143159,
            product:" Acer Metro 5",
            img:"https://tse1.mm.bing.net/th?id=OIP.QOqTcI5zp2L5GAZDpgf4ogHaFK&pid=Api&P=0&h=180",
            customer:"JOHN SMITY",
            date:"1 March",
            amount:785,
            method:"cash on delivery",
            status:"Approved"
        },
        
    ]
    return(
        <>
        <div className="table">
        <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking Id</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            
            >
              <TableCell component="th" scope="row" className="tableCell">
                {row.id}
              </TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                {row.product}
                </div>
                </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className = {`status ${row.status}`}>{row.status}</span>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        </>
    )
}

export default Tables;