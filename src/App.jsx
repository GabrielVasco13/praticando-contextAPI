import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";

export default function App({ children }) {
  const { state } = useContext(AppContext);

  return (
    <div style={{ backgroundColor: state.backgroundColor, minHeight: "100vh" }}>
      {children}
    </div>
  );
}
