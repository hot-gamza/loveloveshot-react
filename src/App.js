import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/header/Header";
import MainPage from "./pages/MainPage";
import ModeSelect from "./pages/ModeSelect";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/modeSelect" element={<ModeSelect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
