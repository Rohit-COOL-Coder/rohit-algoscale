import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Wrapper=styled.div`
margin: 0;
padding: 0;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
const Table=styled.table`
border: 1px solid black;
`
const TableRow=styled.tr``
const TableHead=styled.th``
const TableData=styled.td``

function Dashboard() {
   const [users,setUsers]=useState([])
   

    useEffect(()=>{
       const  fetchUser= async()=>{
          try{
            const res=await axios.get('https://harivara-global-service.herokuapp.com/api/users/getAllUser')
            // console.log(res.data.results)
           setUsers(res.data.results)
           
        }catch(err){
            console.log(err)
          }
       }

        fetchUser()
    },[])
  return (

 <Wrapper>
    <Table>
    <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Email</TableHead>
        <TableHead>createdAT</TableHead>
        <TableHead>updated AT</TableHead>

    </TableRow>

   {users.map((user)=>(
     <TableRow>
     <TableData>{user.name}</TableData>
     <TableData>{user.email}</TableData>
     <TableData>{user.updatedAt}</TableData>
     <TableData>{user.createdAt}</TableData>
     <TableData>{user._id}</TableData>
 </TableRow>
   ))}
 </Table>
 </Wrapper>
  )
}

export default Dashboard