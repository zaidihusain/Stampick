'use client'
import { createContext, useContext } from 'react';

const ItineraryContext = createContext(null);

export const ItineraryProvider = ({ itinerary, children }) => {

  return (
    <ItineraryContext.Provider value={{itinerary}}>
      {children}
    </ItineraryContext.Provider>
  );
};

export const useItinerary = () => {
  return useContext(ItineraryContext);
};
