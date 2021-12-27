import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Search from "./components/Search";
import useLocalStorage from "use-local-storage";

function App() {
  const [userData, setUserData] = useState({});
  const resultData = (data) => {
    setUserData(data);
  };

  // const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const defaultDark = "dark";
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  console.log(theme);
  const switchThemeHandler = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    console.log(theme);
  };

  return (
    <div className="container" data-theme={theme}>
      <Header theme={theme} switchThemeHandler={switchThemeHandler} />
      <Search resultData={resultData} />
      <Card userData={userData} />
    </div>
  );
}

export default App;
