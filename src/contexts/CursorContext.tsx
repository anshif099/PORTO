import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CursorContextType {
  isHovering: boolean;
  setIsHovering: (hovering: boolean) => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};

interface CursorProviderProps {
  children: ReactNode;
}

export const CursorProvider: React.FC<CursorProviderProps> = ({ children }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <CursorContext.Provider value={{ isHovering, setIsHovering }}>
      {children}
    </CursorContext.Provider>
  );
};
