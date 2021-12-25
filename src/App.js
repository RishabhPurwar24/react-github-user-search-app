import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const [userData, setUserData] = useState({});
  const resultData = (data) => {
    setUserData(data);
  };

  return (
    <div className="container">
      <Header />
      <Search resultData={resultData} />
      <Card userData={userData} />
    </div>
  );
}

export default App;
