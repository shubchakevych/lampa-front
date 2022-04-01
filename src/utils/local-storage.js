const getItem = (storageName) => {
    return localStorage.getItem(storageName);
};

const setItem = (storageName, values) => {
    return localStorage.setItem(storageName, values);
};

const removeItem = (storageName) => {
    return localStorage.removeItem(storageName);
};

export { getItem, setItem, removeItem };
