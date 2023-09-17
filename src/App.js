import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/header/Header";
import MainPage from "./pages/MainPage";
import ModeSelect from "./pages/ModeSelect";
import NormalImage from "./pages/NormalImage";
import NormalImageResult from "./pages/NormalImageResult";
import PremiumImage from "./pages/PremiumImage";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/modeSelect" element={<ModeSelect />} />
          <Route path="/normal" element={<NormalImage />} />
          <Route path="/normalResult" element={<NormalImageResult />} />
          <Route path="/premium" element={<PremiumImage />} />
          <Route path="/normalImage" element={<NormalImage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
