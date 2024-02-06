import React from 'react'

const page =async ({params}) => {
  
let data = await fetch(`${process.env.NEXT_PUBLIC_URL}api/getclientinfo`)
let res = await data.json()
// console.log('res',res)
console.log('params',params)
  return (
   <>
   {params.id=='ibim889'&&<div>
      {res.data.map((e,i)=>{
        return(
          <div key={i}>
            <div className='border border-black my-4 ms-4'>
            <div className='flex'><h1 className='font-bold mx-4'>Email</h1><p>{e.email}</p></div>
            <div className='flex'><h1 className='font-bold mx-4'>Subject</h1><p>{e.subject}</p></div>
            <div className='flex'><h1 className='font-bold mx-4'>Message</h1><p>{e.message}</p></div>
            </div>
          </div>
        )
      })}
    </div>}
    {
      params.id!='ibim889'&&<div>
      <h1>Not Found</h1></div>
    }
    </>
    )}

export default page
