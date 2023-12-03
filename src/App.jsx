import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [flashMessage, setFlashMessage] = useState("");

  useEffect(() => {
    if (localStorage.flashMessage) {
      setFlashMessage(localStorage.flashMessage);
      localStorage.removeItem("flashMessage");
    }
  }, []);

  return (
    <BrowserRouter>
      <Header/>
      <div onClick={() => setFlashMessage(null)} className="text-center">
        {flashMessage}
      </div>
      <Content/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;