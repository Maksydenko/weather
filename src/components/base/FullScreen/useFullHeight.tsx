import { useState } from "react";

import { useWindowListener } from "@/hooks/useWindowListener";

interface IUseFullHeight {
  (): string;
}

export const useFullHeight: IUseFullHeight = () => {
  const [height, setHeight] = useState("100vh");

  // Handle height update
  interface IHandleHeightUpdate {
    (): void;
  }
  const handleHeightUpdate: IHandleHeightUpdate = () => {
    const windowHeight = window.innerHeight;
    setHeight(`${windowHeight - 0.0001}px`);
  };
  useWindowListener(handleHeightUpdate);

  return height;
};
