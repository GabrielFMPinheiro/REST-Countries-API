export const getLocalStorage = (name, defaultValue) => {
    const item = localStorage.getItem(name);

    if (item) return JSON.parse(item);

    return defaultValue;
};

export const saveLocalStorage = (name, value) => localStorage.setItem(name, JSON.stringify(value));
