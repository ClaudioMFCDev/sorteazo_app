import './App.css'

function App() {

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-primary italic">
        Sorteazo v4!
      </h1>
      <p className="mt-4 text-success font-medium">
        Si ves esto en verde y azul, Tailwind está vivo.
      </p>
      <button className="mt-6 px-4 py-2 bg-danger text-white rounded-full shadow-lg hover:scale-105 transition-transform">
        Botón Pro
      </button>
    </div>
  )
}

export default App
