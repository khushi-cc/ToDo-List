export const updateItemInLocalStorageArray = (id, updatedData) => {
  const currentArray = loadArrayFromLocalStorage();
  const index = currentArray.findIndex((item) => item.id === id);
  if (index !== -1) {
    currentArray[index] = { ...currentArray[index], ...updatedData };
    localStorage.setItem("myArray", JSON.stringify(currentArray));
  }
};

export const initializeArrayInLocalStorage = () => {
  if (!localStorage.getItem("myArray")) {
    localStorage.setItem("myArray", JSON.stringify([]));
  }
};

export const loadArrayFromLocalStorage = () => {
  try {
    const storedArray = localStorage.getItem("myArray");
    return storedArray ? JSON.parse(storedArray) : [];
  } catch (error) {
    console.error("Error loading array from localStorage", error);
    return [];
  }
};

export const saveArrayToLocalStorage = (array) => {
  try {
    const serializedArray = JSON.stringify(array);
    localStorage.setItem("myArray", serializedArray);
  } catch (error) {
    console.error("Error saving array to localStorage", error);
  }
};

export const addItemToLocalStorageArray = (newItem) => {
  const currentArray = loadArrayFromLocalStorage();
  currentArray.push(newItem);
  saveArrayToLocalStorage(currentArray);
};

export const removeItemFromLocalStorageArray = (id) => {
  let currentArray = loadArrayFromLocalStorage();
  currentArray = currentArray.filter((item) => item.id !== id);
  saveArrayToLocalStorage(currentArray);
};

export const message="good morning"