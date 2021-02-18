// Functions
const getLocalStorage = (key) => {
    return  (
        localStorage.hasOwnProperty(key) ?
        JSON.parse(localStorage.getItem(key)) :
        []
    );
}

const setLocalStorage = (key, value) => {
    localStorage.setItem(
        key,
        JSON.stringify(value)
    );
}

// Exports
export {getLocalStorage, setLocalStorage};