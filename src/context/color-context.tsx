import React, { createContext, useState, useContext, ReactNode } from "react";

export interface ColorItem {
  id: number;
  color: string;
  checked: boolean;
}

interface ColorContextType {
  gridData: ColorItem[];
  currentColor: string | null;
  updateColor: (id: number) => void;
}

const ColorContext = createContext<ColorContextType>({
  gridData: [],
  currentColor: null,
  updateColor: () => {},
});

export function useColorContext() {
  return useContext(ColorContext);
}

interface ColorProviderProps {
  children: ReactNode;
}

export function ColorProvider({ children }: ColorProviderProps) {
 const [gridData, setGridData] = useState<ColorItem[]>([
   { id: 1, color: "#000000", checked: true }, // Black
   { id: 2, color: "#FFFFFF", checked: false }, // White
   { id: 3, color: "#FF0000", checked: false }, // Red
   { id: 4, color: "#0000FF", checked: false }, // Blue
   { id: 5, color: "#00FF00", checked: false }, // Green
   { id: 6, color: "#FFFF00", checked: false }, // Yellow
   { id: 7, color: "#800080", checked: false }, // Purple
   { id: 8, color: "#FFC0CB", checked: false }, // Pink
   { id: 9, color: "#FFA500", checked: false }, // Orange
   { id: 10, color: "#808080", checked: false }, // Gray
   { id: 11, color: "#A52A2A", checked: false }, // Brown
   { id: 12, color: "#00FFFF", checked: false }, // Cyan
 ]);


  const [currentColor, setCurrentColor] = useState<string | null>(null);

  const updateColor = (id: number) => {
    setGridData((prevData) =>
      prevData.map((item) => ({
        ...item,
        checked: item.id === id,
      }))
    );

    const selectedColor = gridData.find((item) => item.id === id);
    setCurrentColor(selectedColor ? selectedColor.color : "");
  };

  return (
    <ColorContext.Provider value={{ gridData, currentColor, updateColor }}>
      {children}
    </ColorContext.Provider>
  );
}
