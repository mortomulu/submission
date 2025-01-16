import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { clearToken } from "../utils/db";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

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
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-all">
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dark/Light Mode Example</h1>
        <ThemeToggle />
      </header>

      <main className="flex flex-col items-center space-y-6">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo h-16 w-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo h-16 w-16" alt="React logo" />
        </a>
        <h1 className="text-4xl font-semibold">Vite + React</h1>

        <div className="card bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-md">
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg"
          >
            Count is {count}
          </button>
          <p className="mt-2">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>

        <p className="text-lg">
          Click on the Vite and React logos to learn more
        </p>

        <button
          onClick={handleLogout}
          className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-lg"
        >
          Logout
        </button>
      </main>
    </div>
  );
}

export default Landing;
