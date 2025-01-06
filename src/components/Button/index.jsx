import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import "./Button.css";

export default function Button({ children }) {
  const { state, toggleBackground } = useContext(AppContext);

  return (
    <div className="button-container">
      <button
        onClick={toggleBackground}
        style={{
          background: state.backgroundColor === "white" ? "black" : "white",
          color: state.backgroundColor === "white" ? "white" : "black",
        }}
      >
        {children}
      </button>
    </div>
  );
}
