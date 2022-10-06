import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Meals from './components/Meals/Meals';
import Error from './components/Error/Error';
import Post from './components/Post/Post';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      loader: async () => {
        return fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      },
      element: <Main></Main>,
      children: [
        {
          path: '/meals/:mealsId',
          loader: async ({ params }) => {
            return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.mealsId}`);
          },
          element: <Meals></Meals>
        },
        {
          path: '/post/:postId',
          loader: async ({ params }) => {
            return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.postId}`);
          },
          element: <Post></Post>
        }
      ]
    },
    { path: '*', element: <Error></Error> }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
