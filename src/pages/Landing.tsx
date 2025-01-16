import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { clearToken } from "../utils/db";
import { useNavigate } from "react-router-dom";

function Landing() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await clearToken();
      navigate("/");
    } catch (error) {
      console.error("Failed to clear token:", error);
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={handleLogout}>logout</button>
    </>
  );
}

export default Landing;
