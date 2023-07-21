import { useDispatch } from 'react-redux';
import { add } from '../../store/CartSlice/CartSlice';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import axios from 'axios';



const Product = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleClick = (product: any) => {
    dispatch(add(product));
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData', id],
    queryFn: () => axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => res.data),
  });

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

  const product = data;

  return (
    <>
   
      <div>
      <section className='pt-32 pb-12 lg:py-32  flex items-center'>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
            
              <img className='max-w-[200px] lg:max-w-xs'
              src={product.image} alt={product.title} />
            </div>
            <div className=' flex-1 text-center lg:text-left'>
              <h1 className='text-[26px] font-medium mb-2 max-w-[450px]  mx-auto lg:mx-0'
              >{product.title}</h1>
              <div className="text-xl text-red-500 font-medium mb-6">
                ${product.price}
              </div>
              <p className='mb-8'
              >
                {product.description}
              </p>
              <button className='bg-[#070404] py-4 px-8 text-white'
                onClick={ () => {  handleClick(product) } }
              >Add to Cart</button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Product;
