import { useState } from 'react';
import './index.css';

function App() {
  const [data, setData] = useState('');
  const [submitted, setSubmitted] = useState(false); // ✅ useState, not let

  return (
    
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/2 text-center">
      { !submitted && (<div>
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Pls fill your details</h1>
        <p className="text-gray-700 text-lg">Tell us something about yourself</p>
        
        <input
          type="text"
          className="mt-4 border border-gray-300 rounded-lg px-4 py-2 w-full h-40"
          placeholder="Give a short intro"
          onChange={(e) => setData(e.target.value)}
        />
        
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
          onClick={() => setSubmitted(true)} // ✅ React state update
        >
          Submit
        </button>
        </div>)
        }

        {submitted && (
          <div className="mt-6">
            <h1 className="text-xl font-semibold mb-2">About myself:</h1>
            <p className="text-gray-800">{data}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
