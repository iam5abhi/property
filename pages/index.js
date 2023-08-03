import React, { useEffect, useState } from 'react'

const index = () => {
    const [data,setData]=useState([])

    const getData = ()=>{
        fetch("/api/details/get-details", { 
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }).then((res) => {return res.json()}
          ).then((res) => setData(res))
    }

    useEffect(() => {
        getData();
    }, [])

  return (
        <>
        {data.map((data)=>{
            return <>
                <div className='items-center'>
            <img src={data.logo} className='h-20' />
        </div>
        <div>
            <h1>Phone Number : {data.phoneNumber} </h1>
            <h1>Alternate Phone Number : {data.alternatePhoneNumber} </h1>
        </div>
        <div>
           {data.about}
        </div>
            </>
        })}
    </>
  )
}

export default index