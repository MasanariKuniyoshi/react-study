// 使用する各モジュールの読み込み
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PageA from "./PageA";
import PageB from "./PageB";

// ルーティングの構築
const AppRouters = () => {
  return (
    <BrowserRouter>
      <Link to="page-a">PageA</Link>
      <br />
      <Link to="page-b">PageB</Link>

      <Routes>
        <Route path="/page-a" element={<PageA />} />
        <Route path="/page-b" element={<PageB />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouters;
