import "./app.scss";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Parallax from "./Components/Parallax/Parallax.jsx";
import Services from "./Components/Services/Services.jsx";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import Contact from "./Components/contact/Contact.jsx";
import Cursor from "./Components/Cursor/Cursor.jsx";
import About from "./Components/About/About.jsx";

function App() {
  return (
    <>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About Me">
        <About />
      </section>
      <section id="Skills">
        <Services />
      </section>
      <span id="Portfolio">
        <Portfolio />
      </span>
      <section id="Contact">
        <Contact id="Contact" />
      </section>
    </>
  );
}

export default App;
