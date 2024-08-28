import { useEffect } from "react";

const useTelegramConfig = () => {
  useEffect(() => {
    const tma = window.Telegram.WebApp;
    tma.expand();
    tma.isClosingConfirmationEnabled = false;
    tma.isVerticalSwipesEnabled = false;
    tma.setHeaderColor("#011627");
    tma.ready();
    console.log(tma.initData, "initData from tma");
  }, []);
};

export default useTelegramConfig;


