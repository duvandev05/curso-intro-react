import React from "react";

/*funcion de custom react hook para el manejo del estado de localstorage */
function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
          setLoading(false);
        } catch(error) {
        // En caso de un error lo guardamos en el estado
          setError(error);
        }
      }, 3000);
    },[])
  
    const saveItem = (newItem) => {
     try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
     } catch (error) {
      setError(error);
     }
    };
  
    return {
      item,
      saveItem,
      loading,
      error
    };
  }

  
export {useLocalStorage};  