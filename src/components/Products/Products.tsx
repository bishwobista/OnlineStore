import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../../store/CartSlice/CartSlice'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from "react-router-dom";
import { BsEyeFill, BsPlus } from 'react-icons/bs';



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


  if (isLoading) return (
    <>
    <section className='h-screen flex justify-center items-center'> Loading...</section>
    </>
  );

  if (error) return (
    <>
    <section className='h-screen flex justify-center items-center'> An error has occured</section>
    </>
  )

  return (
    <>
    <div>
        <section className="py-16">
          <div className='container mx-auto'>

          
          <div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 '
          >
            {
              products.map(
                (product: any) => {
                  return (
                    <div>
                      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
                        <div
                          className='w-full h-full flex justify-center items-center'
                        >
                          <div
                            className='w-[200px] m-12 flex justify-center items-center'
                          >
                            <img className=" max-h[160px] group-hover:scale-110 transition duration-300" src={product.image} alt={product.title} />
                          </div>
                        </div>
                        <div className='absolute top-6 -right-11 group-hover:right-5  p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                          <button onClick={() => { handleClick(product) }}>
                            <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
                              <BsPlus className='text-3xl' />
                            </div>
                          </button>
                          <Link to={`/product/${product.id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'>
                            <BsEyeFill />
                          </Link>
                        </div>
                      </div>

                      <div>
                        <div className='text-sm capitalize text-gray-500 mb-1'>{product.category}</div>
                        <Link to={`/product/${product.id}`}>
                          <h2 className='font-semi-bold mb-1'>{product.title}</h2>
                        </Link>
                        <div className='font-semibold'>$ {product.price}</div>
                      </div>
                    </div>
                  )
                }
              )
            }
          </div>
          </div>
        </section>


        </div>

    </>

  )
}

export default Products