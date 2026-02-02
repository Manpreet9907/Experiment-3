import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Profile() {
  

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", textAlign: "center" }}>
    
      <img
        src="mani.jpg"
        alt="Profile"
        style={{ borderRadius: "50%", width: "250px", height: "250px" }}
      />
      <h1>Manpreet Singh</h1>
     
     <h2>
    Library Management System<br></br>
    </h2>

    </div>
  );
}



function Dashboard() {
  return (
    <div>
      <h1>Dashboard Page</h1>

      <h2>Skills:</h2>
      <ul>
        <li>Artificial Intelligence</li>
        <li>C++</li>
        <li> Python</li>
      </ul>
    </div>
  );
}



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;