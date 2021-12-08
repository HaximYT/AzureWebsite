import { BrowserRouter as Router, Link } from "react-router-dom";
import "../styles/globals.css";

// 705 x 396 (1.78)


function Cardbox({ image, name, description, link }) {
  return (
    <Router>
      <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 glassmorphism rounded shadow-lg overflow-hidden p-5 max-w-sm">
        <img className="w-full h-40p" src={image} alt={name}></img>
        <div className="py-4">
          <h5 className="text-2xl font-bold mb-2 mt-0">{name}</h5>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
        <div className="pt-1 pb-2 flex">
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-14 border border-gray-300 text-sm font-medium rounded-md text-white hover:text-gray-200 focus:opacity-70"
          >
            <Link
              onClick={() => {
                window.location.href = link;
              }}
            >
              Download
            </Link>
          </button>
        </div>
      </div>
    </Router>
  );
}

export default Cardbox;
