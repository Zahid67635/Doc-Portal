import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Notfound from './Pages/NotFound/Notfound';
import Register from './Pages/Register/Register';
import Comment from './Pages/Services/Review/Comment';
import Service from './Pages/Services/Service';
import Services from './Pages/Services/Services';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AddService from './Shared/AddService/AddService';
import MyReviews from './Shared/MyReviews/MyReviews';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => {
            return fetch('https://doc-port-server.vercel.app/home');
          }
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/services',
          element: <Services></Services>,
          loader: () => {
            return fetch('https://doc-port-server.vercel.app/services');
          }
        },
        {
          path: '/add',
          element: <PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
          path: '/comment',
          element: <Comment></Comment>
        },
        {
          path: '/services/:id',
          element: <Service></Service>,
          loader: ({ params }) => {
            return fetch(`https://doc-port-server.vercel.app/services/${params.id}`);
          }
        },
        {
          path: '/myreviews',
          element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
        },

        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]

    },
    {
      path: '*',
      element: <Notfound></Notfound>
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
