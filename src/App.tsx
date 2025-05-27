import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./views/home";
import Test from "./views/test";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Brands from "./views/brands";
import Edits from "./views/edits";
import Edit from "./views/edit";
import { useEffect } from "react";

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <div className="p-w">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/brands?category=menswear" element={<Brands />} />
          <Route path="/brands?category=womenswear" element={<Brands />} />
          <Route path="/brands?category=accessories" element={<Brands />} />
          <Route path="/edits/:slug" element={<Edit />} />
          <Route path="/edits" element={<Edits />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
