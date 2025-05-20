import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ProductForm() {

    const navigate = useNavigate()

    const [state, setState] = useState({
        category: '',
        brand: '',
        title: '',
        price: '',
        mrp: '',
        discount: '',
        rating: {
            rate: '',
            count: ''
        },
        des1: '',
        des2: '',
        des3: '',
        mainImage: '',
        image1: '',
        image2: '',
        image3: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        const numericField = ["price", "mrp", "discount"]

        const newValue = numericField.includes(name) ? Number(value) : value

        if (["rate", "count"].includes(name)) {
            setState((prevState) => ({ ...prevState, rating: { ...prevState.rating, [name]: newValue } }));
        }
        else {
            setState((prevState) => ({ ...prevState, [name]: newValue }));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(`http://localhost:3000/Products`, state)

        setState({
            category: '',
            brand: '',
            title: '',
            price: '',
            mrp: '',
            discount: '',
            rating: {
                rate: '',
                count: ''
            },
            des1: '',
            des2: '',
            des3: '',
            mainImage: '',
            image1: '',
            image2: '',
            image3: ''
        })
    }

    const [length, setLength] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/Products`)
            .then((res) => {
                setLength(res.data.length)
            })
    }, [])

    return (
        <div className='w-full h-screen overflow-auto p-10 bg-black'>
            <form action="" className='w-full' onSubmit={handleSubmit}>
                <div className='text-white font-bold text-4xl flex justify-between mb-10'>
                    <p>Product-Form</p>
                    <div className='flex items-center'>
                        <span className='text-sm'>Total Products - {length == 0 ? 0 : length} </span>
                        <p className='text-sm ml-5 w-[150px] h-[40px] rounded flex justify-center items-center bg-[blue] cursor-pointer' onClick={() => { navigate('/product') }}>Products</p>
                    </div>
                </div>

                <div className='w-full flex flex-wrap gap-7 justify-between'>
                    <div className='w-[49%] px-5'>
                        <p className='text-[gray] mb-2'>Category</p>
                        <input
                            type="text"
                            name='category'
                            value={state.category}
                            onChange={handleChange}
                            placeholder='Enter Category'
                            className='border border-[gray] text-white w-full h-[30px] rounded ps-5'
                        />
                    </div>

                    <div className='w-[49%] px-5'>
                        <p className='text-[gray] mb-2'>Brand</p>
                        <input
                            type="text"
                            name='brand'
                            value={state.brand}
                            onChange={handleChange}
                            placeholder='Enter brand'
                            className='border border-[gray] text-white w-full h-[30px] rounded ps-5'
                        />
                    </div>

                    <div className='w-[49%] px-5'>
                        <p className='text-[gray] mb-2'>Title</p>
                        <input
                            type="text"
                            name='title'
                            value={state.title}
                            onChange={handleChange}
                            placeholder='Enter Title'
                            className='border border-[gray] text-white w-full h-[30px] rounded ps-5'
                        />
                    </div>

                    <div className='w-[49%] px-5'>
                        <p className='text-[gray] mb-2'>Price</p>
                        <input
                            type="text"
                            name='price'
                            value={state.price}
                            onChange={handleChange}
                            placeholder='Enter Price'
                            className='border border-[gray] text-white w-full h-[30px] rounded ps-5'
                        />
                    </div>

                    <div className='w-[49%] px-5'>
                        <p className='text-[gray] mb-2'>MRP</p>
                        <input
                            type="text"
                            name='mrp'
                            value={state.mrp}
                            onChange={handleChange}
                            placeholder='Enter MRP'
                            className='border border-[gray] text-white w-full h-[30px] rounded ps-5'
                        />
                    </div>

                    <div className='w-[49%] px-5'>
                        <p className='text-[gray] mb-2'>Discount</p>
                        <input
                            type="text"
                            name='discount'
                            value={state.discount}
                            onChange={handleChange}
                            placeholder='Enter Discount'
                            className='border border-[gray] text-white w-full h-[30px] rounded ps-5'
                        />
                    </div>

                    <div className='w-[49%] px-5'>
                        <p className='text-[gray] mb-2'>Rate</p>
                        <input
                            type="text"
                            name='rate'
                            value={state.rating.rate}
                            onChange={handleChange}
                            placeholder='Enter Rate'
                            className='border border-[gray] text-white w-full h-[30px] rounded ps-5'
                        />
                    </div>

                    <div className='w-[49%] px-5'>
                        <p className='text-[gray] mb-2'>Count</p>
                        <input
                            type="text"
                            name='count'
                            value={state.rating.count}
                            onChange={handleChange}
                            placeholder='Enter Count'
                            className='border border-[gray] text-white w-full h-[30px] rounded ps-5'
                        />
                    </div>

                    <div className='w-full px-5'>
                        <p className='text-[gray] mb-2'>Description 1</p>
                        <input
                            type="text"
                            name='des1'
                            value={state.des1}
                            onChange={handleChange}
                            placeholder='Enter Des1'
                            className='border border-[gray] text-white w-full h-[30px] rounded ps-5'
                        />
                    </div>

                    <div className='w-[49%] px-5'>
                        <p className='text-[gray] mb-2'>Description 2</p>
                        <input
                            type="text"
                            name='des2'
                            value={state.des2}
                            onChange={handleChange}
                            placeholder='Enter Des2'
                            className='border border-[gray] text-white w-full h-[30px] rounded ps-5'
                        />
                    </div>

                    <div className='w-[49%] px-5'>
                        <p className='text-[gray] mb-2'>Description 3</p>
                        <input
                            type="text"
                            name='des3'
                            value={state.des3}
                            onChange={handleChange}
                            placeholder='Enter Des3'
                            className='border border-[gray] text-white w-full h-[30px] rounded ps-5'
                        />
                    </div>

                    <div className='w-[49%] px-5'>
                        <p className='text-[gray] mb-2'>MainImage</p>
                        <input
                            type="text"
                            name='mainImage'
                            value={state.mainImage}
                            onChange={handleChange}
                            placeholder='Enter MainImage'
                            className='border border-[gray] text-white w-full h-[30px] rounded ps-5'
                        />
                        <img src={state.mainImage} alt="" className='mt-3 w-[100px]' />
                    </div>

                    <div className='w-[49%] px-5'>
                        <p className='text-[gray] mb-2'>Image 1</p>
                        <input
                            type="text"
                            name='image1'
                            value={state.image1}
                            onChange={handleChange}
                            placeholder='Enter Image1'
                            className='border border-[gray] text-white w-full h-[30px] rounded ps-5'
                        />
                        <img src={state.image1} alt="" className='mt-3 w-[100px]' />
                    </div>

                    <div className='w-[49%] px-5'>
                        <p className='text-[gray] mb-2'>Image 2</p>
                        <input
                            type="text"
                            name='image2'
                            value={state.image2}
                            onChange={handleChange}
                            placeholder='Enter Image2'
                            className='border border-[gray] text-white w-full h-[30px] rounded ps-5'
                        />
                        <img src={state.image2} alt="" className='mt-3 w-[100px]' />
                    </div>

                    <div className='w-[49%] px-5'>
                        <p className='text-[gray] mb-2'>Image 3</p>
                        <input
                            type="text"
                            name='image3'
                            value={state.image3}
                            onChange={handleChange}
                            placeholder='Enter Image3'
                            className='border border-[gray] text-white w-full h-[30px] rounded ps-5'
                        />
                        <img src={state.image3} alt="" className='mt-3 w-[100px]' />
                    </div>
                </div>
                <input type="submit" className='border border-[gray] text-[gray] mt-10 w-[150px] h-[40px] rounded cursor-pointer font-bold hover:bg-white hover:text-black ml-5' />
            </form>
        </div>
    )
}

export default ProductForm
