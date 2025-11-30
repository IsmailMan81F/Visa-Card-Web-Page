import "./App.css";
import Navbar from "./Navbar";
import Content from "./Content";
import BlackCardVisual from "./BlackCardVisual";
import WhiteVisualCard from "./WhiteVisualCard";
import Line from "./Line";
import Lines from "./Lines";

export default function App() {
  return (
    <div className="app">
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
      <Line />


    </div>
  );
}
