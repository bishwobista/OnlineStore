import React, { useState, useEffect } from 'react'

const Products = () => {
    const [products, setProducts] = useState([])
  useEffect(() => {
    
    const fetchProducts = async () => {
      const response = await fetch('http://fakestoreapi.com/products')
      const data = await response.json()
      setProducts(data)
    }
    fetchProducts()
  }, [])
  return (
    <>
        <h1>Products</h1>
        <div className='grid grid-cols-4 gap-4'>
        {
            products.map(
                (product: any) => {
                    return (
                        <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
                         key={product.id}>
                            <h2
                            className='text-gray-700 text-base'
                            >{product.title}</h2>
                            <img className="object-contain h-48 w-96" src={product.image} alt={product.title} />
                            <p
                            className='text-gray-700 text-base'
                            >{product.price}</p>
                            <button 
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                            >
                                Add to cart
                            </button>
                        </div>
                    )
                }
            )
        }
        </div>
    </>
  )
}

export default Products