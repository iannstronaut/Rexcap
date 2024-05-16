import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import expressLogo from "/express.svg";
import capacitorLogo from "/capacitor.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import { Link } from "react-router-dom";
import UpdatesPage from "./pages/UpdatePage";

function App() {
  return (
    <div className="flex justify-center items-center flex-col h-screen gap-4">
      <h1 className="text-6xl font-bold italic">Rexcap</h1>
      <h2 className="text-xl font-normal">
        Fullstack Multiplatform App Template
      </h2>
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://expressjs.com" target="_blank">
          <img src={expressLogo} className="logo express" alt="Express logo" />
        </a>
        <a href="https://capacitorjs.com" target="_blank">
          <img
            src={capacitorLogo}
            className="logo capacitor"
            alt="Capacitor logo"
          />
        </a>
      </div>
      <div className="grid grid-cols-2 items-center gap-4">
        <Link to={"/"}>
          <p>Home</p>
        </Link>
        <Link to={"/updates"}>
          <p>Update</p>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}>
          Home
        </Route>
        <Route path="/updates" element={<UpdatesPage />}>
          Updates
        </Route>
      </Routes>
      <p className="read-the-docs">Click on the logos to learn more</p>
    </div>
  );
}

export default App;
