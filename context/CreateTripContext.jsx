import React, { createContext, useState } from 'react';

export const CreateTripContext = createContext(null);

export const CreateTripProvider = ({ children }) => {
  const [tripData, setTripData] = useState({
    locationInfo: null,
  });

  return (
    <CreateTripContext.Provider value={{ tripData, setTripData }}>
      {children}
    </CreateTripContext.Provider>
  );
};