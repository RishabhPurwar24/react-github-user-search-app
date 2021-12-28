import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const [userData, setUserData] = useState({});
  const [darkMode, setDarkMode] = useState(true);
  const resultData = (data) => {
    setUserData(data);
  };

  // const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // const defaultDark = "dark";
  // const [theme, setTheme] = useLocalStorage(
  //   "theme",
  //   defaultDark ? "dark" : "light"
  // );
  // console.log(theme);
  // const switchThemeHandler = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  //   console.log(theme);
  // };

  const modeHandler = (value) => {
    if (value) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
    console.log(value);
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <div className="container">
        <Header modeHandler={modeHandler} darkMode={darkMode} />
        <Search resultData={resultData} />
        <Card userData={userData} />
      </div>
    </div>

    // <div className="container" data-theme={theme}>
    //   <Header theme={theme} switchThemeHandler={switchThemeHandler} />
    //   <Search resultData={resultData} />
    //   <Card userData={userData} />
    // </div>
  );
}

export default App;
