import { useState } from 'react';
import './index.css';

function App() {
  const [data, setData] = useState('');
  const [FN, setFN] = useState('');
  const [LN, setLN] = useState('');
  const [EM, setEM] = useState('');
  const [DOB, setDOB] = useState('');
  const [I1, setI1] = useState('');
  const [I2, setI2] = useState('');
  const [I3, setI3] = useState('');
  const [g1, setg1] = useState('');
  const [g2, setg2] = useState('');
  const [g3, setg3] = useState('');
  const [d1, setd1] = useState('');
  const [d2, setd2] = useState('');
  const [d3, setd3] = useState('');

  const [submitted, setSubmitted] = useState(1); // ✅ useState, not let

  return (<div>
    {(submitted == 3) && (
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-8 h-screen">

      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">Your Portfolio</h1>
        <p className="text-xl text-gray-600 mt-2">Personal Information & Resume</p>
      </header>
    
      {/* Personal Information Section */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800">Personal Information</h2>
        <div className="space-y-3 mt-4 text-gray-700">
          <p><strong>Name:</strong> {FN} {LN}</p>
          <p><strong>Email:</strong> {EM}</p>
          <p><strong>Date of Birth:</strong> {DOB}</p>
        </div>
      </section>
    
      {/* Education Section */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800">Education</h2>
        <div className="space-y-4 mt-4 text-gray-700">
          {/* Institution 1 */}
          {(I1 || g1 || d1) && (
            <div className="space-y-2">
              {I1 && <p><strong>Institution 1:</strong> {I1}</p>}
              {g1 && <p><strong>Grade:</strong> {g1}</p>}
              {d1 && <p><strong>Duration:</strong> {d1}</p>}
            </div>
          )}
    
          {/* Institution 2 */}
          {(I2 || g2 || d2) && (
            <div className="space-y-2">
              {I2 && <p><strong>Institution 2:</strong> {I2}</p>}
              {g2 && <p><strong>Grade:</strong> {g2}</p>}
              {d2 && <p><strong>Duration:</strong> {d2}</p>}
            </div>
          )}
    
          {/* Institution 3 */}
          {(I3 || g3 || d3) && (
            <div className="space-y-2">
              {I3 && <p><strong>Institution 3:</strong> {I3}</p>}
              {g3 && <p><strong>Grade:</strong> {g3}</p>}
              {d3 && <p><strong>Duration:</strong> {d3}</p>}
            </div>
          )}
        </div>
      </section>
    
      {/* Biodata Section */}
      <section className="mt-8 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Biodata</h2>
        <p className="mt-2 text-gray-700">{data}</p>
      </section>
    
    </div>
    )}

{(submitted != 3) &&(
    
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/2 text-center">
      { (submitted ==1) && (<div>
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
          onClick={() => setSubmitted(2)} // ✅ React state update
        >
          Submit
        </button>
        </div>)
        }

        {(submitted==2) && (
          <div className="mt-6">
            <h1 className="text-xl font-semibold mb-2">About myself:</h1>
            <p className="text-gray-800">{data}</p>
            


            <h1 className="text-3xl font-bold text-blue-600 mb-4">Pls fill your details</h1>
    <div class="grid grid-cols-3 gap-4">
      <h2 class="col-span-3 text-2xl"> Basic Info</h2>
  <div class="...">
  <label for="name" class="p-5 ">First Name</label>
  <input class="bg-white rounded-lg border-orange-400 border-3 w-full " onChange={(e)=>setFN(e.target.value)}type="text" required id="name" placeholder="type your first-name"/>
  </div>
  <div class="col-start-3"><label for="name" class=" p-5 ">Last Name</label>
<input class="bg-white rounded-lg border-orange-400 border-3 w-full" onChange ={(e)=>setLN(e.target.value)} type="text" required id="name" placeholder="type your last-name" />
</div>
 
  <div class="col-span-2 "><label for="email" class=" ">Email Address</label><br/>
<input class="bg-white rounded-lg border-orange-400 border-3 w-full" onChange={(e)=>setEM(e.target.value)} type="email" required id="email" placeholder="type your email address" />
</div>
  <div class="..."><label for="dob" class="p-5 ">DOB</label><br/>
<input class="bg-white rounded-lg border-orange-400 border-3 w-full" onChange={(e)=>setDOB(e.target.value)} type="date" required id="dob" />
</div>
 
  <h2 class="col-span-3 text-2xl"> Education</h2>
  
   <div class="col-span-2 "><label for="inst1" class=" ">Institution 1</label><br/>
<input class="bg-white rounded-lg border-orange-400 border-3 w-full" type="text" onChange={(e)=>setI1(e.target.value) }required id="inst1" placeholder="type your institutes name" />
</div>
<div>
<label for="grade" class="">Grade</label>
<input
  class="bg-white rounded-lg border-orange-400 border-3 w-full"
  type="number"
  id="grade"
  name="grade"
  placeholder="CGPA (0–10)"
  min="0"
  max="10"
  step="0.1"
  required
  onChange={(e)=>setg1(e.target.value)}
/>
</div>
<div class="col-span-2">
  <label for="inst2" class="">Institution 2</label><br></br>
  <input class="bg-white rounded-lg border-orange-400 border-3 w-full" type="text" onChange={(e)=>setI2(e.target.value)}  id="inst2" placeholder="type your institute's name" />
</div>
<div>
  <label for="grade2" class="">Grade</label>
  <input
    class="bg-white rounded-lg border-orange-400 border-3 w-full"
    type="number"
    id="grade2"
    name="grade2"
    placeholder="CGPA (0–10)"
    min="0"
    max="10"
    step="0.1"
    onChange={(e)=>setg2(e.target.value)}
  />
</div>
<div class="col-span-2">
  <label for="inst3" class="">Institution 3</label><br/>
  <input class="bg-white rounded-lg border-orange-400 border-3 w-full" type="text" onChange={(e)=>setI3(e.target.value)} id="inst3" placeholder="type your institute's name" />
</div>
<div>
  <label for="grade3" class="">Grade</label>
  <input
    class="bg-white rounded-lg border-orange-400 border-3 w-full"
    type="number"
    id="grade3"
    name="grade3"
    placeholder="CGPA (0–10)"
    min="0"
    max="10"
    step="0.1"
    onChange={(e)=>setg3(e.target.value)}
  />
</div>


</div>

<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2" onClick={()=> setSubmitted(3)}>Submit</button>



          </div>
        )}
      </div>
    </div>
    
    )}
    </div>
  );
}


export default App;
