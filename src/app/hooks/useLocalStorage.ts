import { Dispatch, useEffect } from 'react';

export function useLocalStorage(key: string, setData: Dispatch<any>) {
  // First we're going to check if there's any local storage with the given key
  // if so we're going to use setData to save the exisitng data into page data to render appropriate comps
  useEffect(() => {
    const localData = window.localStorage.getItem(key);
    if (localData) {
      setData(JSON.parse(localData));
    }
  }, []);

  // a function to set data after loaded to localStorage
  function setLocalStorage(data: any) {
    window.localStorage.setItem(key, JSON.stringify(data));
  }

  return {
    setLocalStorage,
  };
}
