import Home from "./pages/Home/Home";
import "./App.css";
import { useState } from "react";
import { TaskData as data } from "./mock/TaskData";

function App() {
  const [feedback, setFeedBack] = useState(data);

  const handleSortClick = () => {
    setFeedBack((prev) => {
      prev.sort((a, b) => (a.description > b.description ? 1 : -1));
    });
  };

  return (
    <div className="App">
      <Home feedback={feedback} handleSortClick={handleSortClick} />
    </div>
  );
}

export default App;
