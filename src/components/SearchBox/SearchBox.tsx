import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SearchBox = () => {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState<any[]>([]);
  const [sortByPrice, setSortByPrice] = useState<'asc' | 'desc' | 'none'>('none');

  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      axios.get('https://fakestoreapi.com/products').then((res) => res.data),
    onSuccess: (data) => setProducts(data),
  });

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ';

  const filteredProducts = products.filter((val) =>
    val.title.toLowerCase().includes(search.toLowerCase())
  );

  
  const sortedProducts = filteredProducts.slice().sort((a, b) => {
    if (sortByPrice === 'asc') {
      return a.price - b.price;
    } else if (sortByPrice === 'desc') {
      return b.price - a.price;
    } else {
      // If no price filter, return the original order of products
      return 0;
    }
  });

  return (
    <>
      <section className='container mx-auto flex flex-col items-center justify-center space-y-4 p-44 h-full '>
      <div className="flex items-center"> 
        <form>
          <input
            type='text'
            placeholder='Search'
            value={search}
            className='w-full outline-none px-2 py-1 border-b-2 border-gray-500 '
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>
          <div className="flex items-center w-full md:w-auto"> 
            
            <select
              id="sortSelect"
              className="px-2 py-1 border rounded outline-none"
              value={sortByPrice}
              onChange={(e) => setSortByPrice(e.target.value as 'asc' | 'desc' | 'none')}
            >
              <option value="none">No Price Filter</option>
              <option value="asc">Price Low to High</option>
              <option value="desc">Price High to Low</option>
            </select>
          </div>
        </div>
        <div className='flex flex-wrap space-x-4 '>
          {sortedProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <h1 className="text-3xl font-bold">No Search Result</h1>
              <p className="text-xl">Please try again</p>
            </div>
          ) : (
            sortedProducts.map((product: any) => (
              <div
                className='flex flex-row items-center border border-gray-300 rounded p-2 m-5 w-full'
                key={product.id}
              >
                <Link to={`/product/${product.id}`}>
                  <div className='flex flex-row items-center justify-center w-full m-2'>
                    <img
                      className='object-contain h-12 w-12'
                      src={product.image}
                      alt={product.title}
                    />
                    <h2 className='font-light m-2 '>{product.title}</h2>
                    <p className=' font-normal m-1 '>${product.price}</p>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default SearchBox;
