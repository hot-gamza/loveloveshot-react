import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainpage/MainPage";
import ModeSelect from "./pages/modeselect/ModeSelect";
import Standard from "./pages/standard/Standard";
import NormalImageResult from "./pages/normalimageresult/NormalImageResult";
import Premium from "./pages/premium/Premium";
import NotFound from "./pages/NotFound";
import Layout from "./layouts/Layouts";
import OAuth2Redirect from "./oauth2/OAuth2Redirect";
import Normal from "./pages/standard/Normal";
import Rule from "./pages/rule/Rule";
import Album from "./pages/album/Album";
import Result from "./pages/result/Result";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/modeSelect" element={<ModeSelect />} />
          <Route path="/standard" element={<Standard />} />
          <Route path="/normalResult" element={<NormalImageResult />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/oauth2/redirect" element={<OAuth2Redirect />} />
          <Route path="/normal" element={<Normal />} />
          <Route path="/rule" element={<Rule />} />
          <Route path="/album" element={<Album />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
