import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../../store/CartSlice/CartSlice'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from "react-router-dom";



const Products = () => {
  const dispatch = useDispatch();

  const handleClick = (product: any) => {
    dispatch(add(product));
  }
  const [products, setProducts] = useState([])


  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      axios.get('https://fakestoreapi.com/products').then((res) => res.data),
    onSuccess: (data) => setProducts(data),

  })
  

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: '

  return (
    <>
      <h1>Products</h1>
      <div className='grid grid-cols-4 gap-4'>
        {
          products.map(
            (product: any) => {
              return (
                <Link to={`/product/${product.id}`} key={product.id}>
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
                    onClick={
                      () => {
                        handleClick(product)
                      }
                    }
                  >
                    Add to cart
                  </button>
                </div>
                </Link>
              )
            }
          )
        }
      </div>
    </>

  )
}

export default Products