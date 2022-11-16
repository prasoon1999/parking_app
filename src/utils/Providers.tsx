import { useState } from 'react';

import { FreeSpacesContext, ParkingContext, TotalSpacesContext } from './Contexts';
import { Vehicle } from './Types';

const Providers = ({children}: {children: any}) => {
  const [totalSpaces, setTotalSpaces] = useState<number>(0);
  const [parkingData, setParkingData] = useState<Vehicle[]>([]);
  const [freeSpacesData, setFreeSpacesData] = useState<number[]>([]);

  return (
    <TotalSpacesContext.Provider value={{totalSpaces, setTotalSpaces}}>
      <ParkingContext.Provider value={{parkingData, setParkingData}}>
        <FreeSpacesContext.Provider value={{freeSpacesData, setFreeSpacesData}}>
          {children}
        </FreeSpacesContext.Provider>
      </ParkingContext.Provider>
    </TotalSpacesContext.Provider>
  );
};

export default Providers;
