import React from 'react';
import { GSAPGlobal } from './GSAPGlobal';

interface GSAPProviderProps {
  children?: React.ReactNode;
}

/**
 * GSAPProvider mounts the GSAPGlobal animation listener inside the React Router tree.
 * It automatically activates smooth page entrances, ScrollTrigger reveals, card interactions,
 * and component micro-motion without modifying any underlying component logic.
 */
export const GSAPProvider: React.FC<GSAPProviderProps> = ({ children }) => {
  return (
    <>
      <GSAPGlobal />
      {children}
    </>
  );
};

export default GSAPProvider;
