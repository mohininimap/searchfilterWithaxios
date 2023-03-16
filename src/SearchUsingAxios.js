import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {MDBTable,MDBTableHead,MDBTableBody,MDBRow,MDBCol,MDBContainer} from "mdb-react-ui-kit";
const SearchUsingAxios = () => {
    const [data,setData]=useState([]);
    const [value,setValue]=useState("");

    useEffect(()=>{
        loadUserData()
    },[])

    const handleReset=()=>{}
    const handleSearch=async(e)=>{
        e.preventDefault();
        return await axios
        .get(`https://jsonplaceholder.typicode.com/posts?q=${value}`)
        .then((response)=>{
            setData(response.data)
            setValue("")
        }
      
        
        )
        .catch((err)=>console.log(err))
    }

    const loadUserData=async()=>{
 return await axios
 .get("https://jsonplaceholder.typicode.com/posts")
 .then((response)=>setData(response.data))
 .catch((error)=>console.log(error))
    }
    console.log("data ",data)
  return (
    <MDBContainer >
        <form 
        onSubmit={handleSearch}
        style={{margin:"auto",padding:"15px",maxWidth:"400px",alignContent:"center"}}>
        
        <input type="text" 
        placeholder='Search Name'
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        />
      <div>
        <button type="submit" onClick={()=>handleSearch()}>Search</button>
        <button type="submit" onClick={()=>handleReset()}>Reset</button>
        </div>
        </form>
        <div>
            <h2 className='text-center'>Search and Filter</h2>
            <MDBRow>
                <MDBCol size="12">
                <MDBTable>
                    <MDBTableHead dark>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Name.</th>
                            <th scope="col">Body</th>
                          
                        </tr>
                    </MDBTableHead>
                    {data.length===0?(
                        <MDBTableBody className='align-center mb-0'>
                         <tr>
                            <td colspan={8} className='text-center mb-0'>
                             No Data Found
                            </td>
                         </tr>
                        </MDBTableBody>
                    ):(
                        data.map((item,index)=>(
                          <MDBTableBody key={index}>
                            <tr>
                              <th scope="row">{index+1}</th> 
                              <td>{item.title}</td>
                              <td>{item.body}</td>
                           
                            </tr>
                          </MDBTableBody>  
                        ))
                    )}
                </MDBTable>
                </MDBCol>
            </MDBRow>
        </div>
    </MDBContainer>
   
  )
}

export default SearchUsingAxios