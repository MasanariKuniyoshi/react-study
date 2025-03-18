import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToPageA = () => {
    navigate("/page-a");
  };
  const goToPageB = () => {
    navigate("/page-b");
  };

  return (
    <div>
      <h1>Homeページ</h1>
      <button onClick={goToPageA}>PageA</button>
      <br />
      <button onClick={goToPageB}>PageB</button>
    </div>
  );
};

export default Home;
