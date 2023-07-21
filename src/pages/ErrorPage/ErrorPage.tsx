import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    
    const redirectTimeout = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(redirectTimeout);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">404 Not Found</h1>
        <p className="mt-4 text-gray-600">The page you're looking for does not exist.</p>
        <p className="mt-4 text-gray-600">You will be redirected to the homepage shortly.</p>
      </div>
    </div>
  );
};

export default ErrorPage;