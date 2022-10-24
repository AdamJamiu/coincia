import { useState } from 'react';
import logo from '../src/Cryptocurrency.png';
import './App.css';
import AppBar from './components/navbar/Appbar';
import Trending from './components/trending/Trending';
import CryptoCurrencies from "./components/cryptocurrencies/CryptoCurrencies";


function App() {
  const [modalStatus, setModalStatus] = useState(false);
  const [coinId, setCurrenCoinid] = useState("");
  const [themeLight, setTheme] = useState(true);

  const onsetThemeHandler = () => {
    setTheme((status) => !status);
  };

  const onCloseModalHandler = (id) => {
    setModalStatus((status) => !status);
    if (!id) {
      setCurrenCoinid("");
    } else {
      setCurrenCoinid(id);
    }
  };

  return (
    <div className={`${themeLight === true ? "" : "bg-[#0a1929] text-white"}`}>
      <AppBar themeStatus={themeLight} onSetTheme={onsetThemeHandler} />
      <Trending themeStatus={themeLight} onsetModal={onCloseModalHandler} />
      <CryptoCurrencies themeStatus={themeLight}
        onsetModal={onCloseModalHandler} />

    </div>
  );
}

export default App;
