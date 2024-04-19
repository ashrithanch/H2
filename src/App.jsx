import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './components/Main'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/welcome',
    element: <h1>Hello World</h1>,
  },
])

const App = () => {
  return (
    <div className="relative">
      <RouterProvider router={router} />
    </div>
  )
}
export default App
