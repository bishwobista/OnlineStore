import { useDispatch } from 'react-redux';
import { add } from '../../store/CartSlice/CartSlice';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import axios from 'axios';



const Product = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleClick = (product:any) => {
    dispatch(add(product));
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData', id], 
    queryFn: () => axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => res.data),
  });

  if (isLoading) return 'Loading...';

  if (error) return `An error has occurred`;

  const product = data;

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={product?.title}
            className="lg:w-1/2 w-full lg:h-auto h-64 max-h-[500px] object-contain object-center rounded"
            src= {product?.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
              {product?.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product?.title}
            </h1>
            
            <p className="leading-relaxed">
              {product?.description}
            </p>
            
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product?.price}
              </span>
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              onClick={
                      () => {
                        handleClick(product)
                      }
                    }
              >
                Add to Cart
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Product;
