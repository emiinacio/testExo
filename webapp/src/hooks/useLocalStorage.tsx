//


import { useState, useEffect } from 'react';

const UseLocalStorage = (key:string): [any | null, (data: any) => void] => {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem(key);
    if (storedData) {
      setData(storedData);
    }
  }, []);

  const saveData = (newData: any) => {
    const newDataString = JSON.stringify(newData);
    localStorage.setItem(key, newDataString);
    setData(newDataString);
  };

  return [data, saveData];
};

export default UseLocalStorage;