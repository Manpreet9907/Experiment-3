import { BrowserRouter, Routes, Link, Route } from "react-router-dom";

function Profile() {
  return (
    <div style={{ maxWidth: "600px", margin: "120px auto", textAlign: "center" }}>
      <img
        src="/mani.jpg"
        alt="Profile"
        style={{ borderRadius: "50%", width: "250px", height: "250px" }}
      />

      <h1>Manpreet Singh</h1>

      <h2>
        Library Management System <br />
        Artisan Auctions Web App <br />
      </h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div style={{ padding: "120px 40px" }}>
      <h1>Dashboard Page</h1>

      <h2>Skills:</h2>
      <ul>
        <li>Artificial Intelligence</li>
        <li>C++</li>
        <li>Python</li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "60px",
          backgroundColor: "#1c1c1c",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 30px",
          zIndex: 1000
        }}
        >
        <Link
          to="/"
          style={{
            color: "#4d6aff",
            fontWeight: "bold",
            textDecoration: "none"
          }}
        >
          My Profile
        </Link>

        <div>
          <Link to="/" style={navButton}>
            Profile
          </Link>
          <Link to="/dashboard" style={navButton}>
            Dashboard
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

const navButton = {
  marginLeft: "15px",
  padding: "6px 14px",
  backgroundColor: "#222",
  color: "white",
  textDecoration: "none",
  borderRadius: "6px"
};

export default App;
