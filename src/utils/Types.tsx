export type Vehicle = {
  id: number;
  numberPlate: string;
  parkingTime: string;
};

export type TotalSpacesInterface = {
  totalSpaces: number;
  setTotalSpaces: (value: number) => void;
};

export type ParkingInterface = {
  parkingData: Vehicle[];
  setParkingData: (value: Vehicle[]) => void;
};

export type FreeSpacesInterface = {
  freeSpacesData: number[];
  setFreeSpacesData: (value: number[]) => void;
};