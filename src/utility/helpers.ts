import {ICryptoData} from "./types.ts";

export const getUniqueItems = (array: ICryptoData[]) => {
  const uniqueItems = {} as Record<number, ICryptoData>;

  array.forEach(item => {
    if (!uniqueItems[item.t]) {
      uniqueItems[item.t] = item;
    }
  });

  return Object.values(uniqueItems);
}

export const getTime = (date: Date) => {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`
}

export const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256); // Random number between 0 and 255 for red
  const g = Math.floor(Math.random() * 256); // Random number between 0 and 255 for green
  const b = Math.floor(Math.random() * 256); // Random number between 0 and 255 for blue

  return `rgb(${r}, ${g}, ${b})`;
}
