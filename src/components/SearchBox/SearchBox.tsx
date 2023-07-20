import { useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from "react-router-dom";


const SearchBox = () => {

 

  const [search, setSearch] = useState('')
  const [products, setProducts] = useState<any[]>([])


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
    <div>
      <form >
        <input type="text" placeholder="Search" value={search} className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none
        " 
        onChange={(e) => {
          setSearch(e.target.value)

        }
        
        }
        />
      </form>
    </div>
    <div>
      {products.filter((val) => {
        if (search === '') {
          // return val
          return ''
        } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
          return val
        }
      }
      ).map((product: any) => {
        return (
          <ul>
            <li
              className='text-gray-700 text-base'
              key={product.id}
            >
              <Link to={`/product/${product.id}`} key={product.id}>
                <h2
                  className='text-gray-700 text-base'
                >{product.title}</h2>
                <img className="object-contain h-48 w-96" src={product.image} alt={product.title} />
                <p
                  className='text-gray-700 text-base'
                >{product.price}</p>
              </Link>
              
            </li>

          </ul>
          
        )
      }
      )}
      
    </div>
    </>
  )
}

export default SearchBox