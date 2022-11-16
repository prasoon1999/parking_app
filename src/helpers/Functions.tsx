import { Vehicle } from "../utils/Types";

// Get time difference between the current and selected time
export const getTimeSpent = (parkingTime: string) => {
  const currentHours = new Date().getHours();
  const currentMinutes = new Date().getMinutes();
  const splitParkingTime = parkingTime.split(':');
  const parkingHours = parseInt(splitParkingTime[0]);
  const parkingMinutes = parseInt(splitParkingTime[1]);
  const timeSpent = Math.floor(
    currentHours + currentMinutes / 60 - (parkingHours + parkingMinutes / 60),
  );
  return timeSpent;
};

// Select a random spot from an array of free parking spaces
export const getRandomSpace = (
  freeSpacesData: number[],
  setFreeSpacesData: (value: number[]) => void,
) => {
  const randomSpace =
    freeSpacesData[Math.floor(Math.random() * freeSpacesData.length)];
  setFreeSpacesData(freeSpacesData.filter(e => e !== randomSpace));
  console.log(freeSpacesData);
  return randomSpace;
};
