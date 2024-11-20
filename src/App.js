import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import About from "./Page/About/About";
import Review from "./Page/Review/Review";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Footer from "./Components/Footer/Footer";
import JungFrauDetail from "./Components/JungFrauDetail/JungFrauDetail";
import LakeGenevaDetail from "./Components/LakeGenevaDetail/LakeGenevaDetail";
import LucerneDetail from "./Components/LucerneDetail/LucerneDetail";
import EiffelDetail from "./Components/EiffelDetail/EiffelDetail";
import VersaillesDetail from "./Components/VersaillesDetail/VersaillesDetail";
import FrenchRivieraDetail from "./Components/FrenchRivieraDetail/FrenchRivieraDetail.jsx";
import FujiDetail from "./Components/FujiDetail/FujiDetail";
import FushimiDetail from "./Components/FushimiDetail/FushimiDetail";
import DisneylandDetail from "./Components/DisneylandDetail/DisneylandDetail";
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import ReviewAdd from './Components/ReviewAdd/ReviewAdd';
import ReviewDetail from './Components/ReviewDetail/ReviewDetail';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Review" element={<Review />} />
        <Route path="Login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/ReviewAdd" element={<ReviewAdd />} />
        <Route path="/ReviewDetail" element={<ReviewDetail />} />
        <Route path="/jungfrau" element={<JungFrauDetail />} />
        <Route path="/lakegeneva" element={<LakeGenevaDetail />} />
        <Route path="/lucerne" element={<LucerneDetail />} />
        <Route path="/eiffeltower" element={<EiffelDetail />} />
        <Route path="/versailles" element={<VersaillesDetail />} />
        <Route path="/frenchriviera" element={<FrenchRivieraDetail />} />
        <Route path="/fuji" element={<FujiDetail />} />
        <Route path="/fushimiinarishrine" element={<FushimiDetail />} />
        <Route path="/tokyodisneyland" element={<DisneylandDetail />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
