import heroImg from '../../assets/hero.jpg'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <section className="bg-orange-50 h-[600px] bg-hero bg-no-repeat bg-center bg-cover py-32  font-sans">
    <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col">
            <div className='flex items-center uppercase font-semibold'>
                <div>New Arrivals</div>
            </div>
            <h1 className='text-[70px] font-light mb-4'>
                TRENDY AND CLASSY <br />
                <span className='font-semibold'>FOR NEW SEASON  </span>
            </h1>
            <Link to="/" className='self-start uppercase font-semibold border-b-2 border-black'>
                Explore Now
            </Link>
        </div>
        <div className="hidden lg:block lg:max-w-2xl lg:w-full ">
      <img className="object-cover object-center rounded" src={heroImg}/>
    </div>
    </div>
    </section>
  )
}

export default Hero