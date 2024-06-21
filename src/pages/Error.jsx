import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">News Portal</h1>
          <nav>
            <Link to="/" className="text-white hover:underline mx-2">Home</Link>
            <Link to="/about" className="text-white hover:underline mx-2">About</Link>
            <Link to="/contact" className="text-white hover:underline mx-2">Contact</Link>
            <Link to="/favorites" className="text-white hover:underline mx-2">Favorites</Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold text-center">Page not found</h2>

        <div className="flex justify-center items-center">
          <Link to="/" className="mt-4 block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go back to the homepage
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Error
