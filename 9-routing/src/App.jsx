import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import TopBar from "./components/TopBar";
import "./App.css";
const Dashboard = React.lazy(() => import("./components/Dashboard"));
function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"loading..."}>
                <Dashboard />
              </Suspense>
            }
          ></Route>
          <Route path="/" element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
