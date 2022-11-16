import { createContext } from 'react';

import { FreeSpacesInterface, ParkingInterface, TotalSpacesInterface } from './Types';

export const TotalSpacesContext = createContext<TotalSpacesInterface>({
  totalSpaces: 0,
  setTotalSpaces: () => {},
});

export const ParkingContext = createContext<ParkingInterface>({
  parkingData: [],
  setParkingData: () => {},
});

export const FreeSpacesContext = createContext<FreeSpacesInterface>({
  freeSpacesData: [],
  setFreeSpacesData: () => {},
});
