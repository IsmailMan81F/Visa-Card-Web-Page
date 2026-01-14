import "./App.css";
import Navbar from "./Navbar";
import Content from "./Content";
import BlackCardVisual from "./BlackCardVisual";
import WhiteVisualCard from "./WhiteVisualCard";
import Line from "./Line";
import Lines from "./Lines";
import BgImage from "./assets/background-image.jpg";

export default function App() {
  return (
    <>
      <div
        className="overlay"
        style={{
          position: "absolute",
          inset: 0,
          minHeight: "100vh",
          background:
            "linear-gradient(90deg,rgba(255, 255, 255, 0.92) 0%,  white 30%, rgba(255, 255, 255, 0.68))",
          zIndex: 1,
        }}
      ></div>
      <div
        className="app"
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div className="content" style={{ zIndex: 2, position: "relative" }}>
          <Navbar />
          <Content />
          <div
            style={{
              width: 229,
              height: 200,
              backgroundColor: "white",
              position: "absolute",
              top: 320,
              right: 400,
            }}
          ></div>
          <BlackCardVisual />
          <WhiteVisualCard />
        </div>
      </div>
    </>
  );
}
