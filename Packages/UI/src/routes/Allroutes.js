import { Routes, Route } from "react-router-dom";
import { Homepage } from "../pages/index";

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};
