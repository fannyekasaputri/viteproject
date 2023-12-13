import './index.css'
import Bg8 from "../src/assets/Bg8.jpeg";

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${Bg8})`,
    backgroundSize: "cover",
    backgroundPosition: "flex",
    minHeight: "100vh",
  };


  return (
    <>
      <div className="hero min-h-screen" style={{backgroundImage: `url(${Bg8})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="carousel carousel-end rounded-box space-x-4 p-4">
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Drink" />
        </div>
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Drink" />
        </div>
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Drink" />
        </div>
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Drink" />
        </div>
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Drink" />
        </div>
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Drink" />
        </div>
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Drink" />
        </div>
      </div>

    </>
  )
}

export default App
