import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PageA from "./PageA";
import PageB from "./PageB";

const UseNavigateRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page-a" element={<PageA />} />
        <Route path="/page-b" element={<PageB />} />
      </Routes>
    </BrowserRouter>
  );
};

export default UseNavigateRoutes;
