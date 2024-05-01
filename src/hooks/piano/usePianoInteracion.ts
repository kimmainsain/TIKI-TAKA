import { useState, useEffect } from "react";

export const usePianoInteraction = () => {
  const [activeKeys, setActiveKeys] = useState({});

  useEffect(() => {
    const downHandler = ({ key }) => {
      setActiveKeys((prev) => ({ ...prev, [key]: true }));
    };

    const upHandler = ({ key }) => {
      setActiveKeys((prev) => ({ ...prev, [key]: false }));
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);

  return activeKeys;
};
