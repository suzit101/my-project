import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};
const About = () => {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
};
const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
    </div>
  );
};

const Settings = () => {
  return (
    <div>
      <h1>Settings Page</h1>
    </div>
  );
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/account">
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
