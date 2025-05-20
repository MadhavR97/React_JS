import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Product() {
    const [data, setData] = useState([])
    const [length, setLength] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:3000/Products`)
            .then((res) => {
                setData(res.data)
                setLength(res.data.length)
            })
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/Products/${id}`)
    }

    return (
        <div className='w-full h-screen overflow-auto p-10 bg-black'>
            <div className='w-full h-[100px] flex justify-between items-center mb-10 fixed top-0 left-0 bg-black z-1'>
                <p className='text-white font-bold text-4xl'>Product-Form</p>
                <div className='flex items-center'>
                    <span className='text-sm text-white'>Total Products - {length == 0 ? 0 : length} </span>
                    <p className='text-white font-bold text-sm ml-5 w-[150px] h-[40px] rounded flex justify-center items-center bg-[blue] cursor-pointer' onClick={() => { navigate('/') }}>Product-Form</p>
                </div>
            </div>

            {data.map((e, i) => (
                <div className='border border-[gray] w-full p-5 relative rounded mb-5 mt-[100px]' key={e.id}>
                    <p className='w-[30px] h-[30px] rounded text-black bg-white flex justify-center items-center font-bold absolute left-0 top-0'>{i + 1}</p>
                    <div className='w-full h-[200px] flex flex-wrap justify-evenly'>
                        <div className='border border-[gray] w-[160px] h-full'><img src={e.mainImage} alt="" className='w-full h-full' /></div>
                        <div className='border border-[gray] w-[160px] h-full'><img src={e.image1} alt="" className='w-full h-full' /></div>
                        <div className='border border-[gray] w-[160px] h-full'><img src={e.image2} alt="" className='w-full h-full' /></div>
                        <div className='border border-[gray] w-[160px] h-full'><img src={e.image3} alt="" className='w-full h-full' /></div>
                    </div>
                    <div className='w-full p-5 relative'>
                        <p className='text-[gray] mb-3'>Title - {e.title}</p>
                        <p className='text-[gray] mb-3'>Price - {e.price}</p>
                        <p className='text-[gray] mb-3'>MRP - {e.mrp}</p>
                        <p className='text-[gray] mb-3'>Discount - {e.discount}</p>
                        <p className='text-[gray] mb-3'>Rate - {e.rating.rate}</p>
                        <p className='text-[gray] mb-3'>Count - {e.rating.count}</p>
                        <p className='text-[gray] mb-3'>Design - {e.design}</p>
                        <p className='text-[gray] mb-3'>Fit - {e.fit}</p>
                        <p className='text-[gray] mb-3'>Neck - {e.neck}</p>
                        <p className='text-[gray] mb-3'>Occasion - {e.occasion}</p>
                        <p className='text-[gray] mb-3'>Sleeve - {e.sleeve}</p>
                        <p className='text-[gray] mb-3'>Washcare - {e.washcare}</p>
                        <p className='text-[gray] mb-3'>Description1 - {e.des1}</p>
                        <p className='text-[gray] mb-3'>Description2 - {e.des2}</p>
                        <p className='text-[gray] mb-3'>Description3 - {e.des3}</p>
                        <Link to={`/edit/${e.id}`}><button className='border border-white absolute top-10 right-30 w-[100px] h-[40px] rounded cursor-pointer text-white hover:bg-[white] hover:text-black'>Edit</button></Link>
                        <button onClick={() => { handleDelete(e.id) }} className='border border-white absolute top-10 right-0 w-[100px] h-[40px] rounded cursor-pointer text-white hover:bg-[white] hover:text-black'>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Product
