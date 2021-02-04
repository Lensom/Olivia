import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export const MainLayout: React.FC<IProps> = ({ children }) => (
  <div>
    Main layout
    child - {children}
  </div>
);
