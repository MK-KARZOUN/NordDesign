import { Navigate, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InsightArticle from "./pages/InsightArticle";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Navigate to="/not-found" replace />} />
        <Route path="/insights" element={<Navigate to="/not-found" replace />} />
        <Route path="/insights/:slug" element={<InsightArticle />} />
        <Route path="/services" element={<Navigate to="/not-found" replace />} />
        <Route path="/contact" element={<Navigate to="/not-found" replace />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
