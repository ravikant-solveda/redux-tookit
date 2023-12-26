import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Header from "./header/Header";
import Product from "./components/Product";
import Services from "./components/Services";
import FAQs from "./components/FAQs";
import Counter from "./components/Counter";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="about" element={<About />}>
          <Route path="counter" element={<Counter />} />
        </Route>
        <Route path="counter" element={<Counter/>}/>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="service" element={<Services />}></Route>
        <Route path="faq" element={<FAQs />}></Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
