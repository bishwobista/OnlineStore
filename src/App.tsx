import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ErrorPage from './pages/ErrorPage/ErrorPage';


const AppLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer/>
    </>
  )
}

const route = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);




function App() {
  return (
    <RouterProvider router={route} />
  );
}

export default App
