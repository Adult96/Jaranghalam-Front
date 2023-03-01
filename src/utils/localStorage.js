'use strict';

const Storage = {
  setUserName(name) {
    removeLocalStorage('userName');
    setlocalStorage('userName', name);
  },

  getUserName() {
    return window.localStorage.getItem('userName');
  },

  getLocalStorageJSON(key) {
    const parseToJSON = window.localStorage.getItem(key);
    return JSON.parse(parseToJSON);
  },
};

function setlocalStorage(key, value) {
  return window.localStorage.setItem(key, value);
}

function setLocalStorageJSON(key, data) {
  const stringToJSON = JSON.stringify(data);
  return window.localStorage.setItem(key, stringToJSON);
}

function getLocalStorageAll() {
  for (const key in window.localStorage) {
    if (window.localStorage.hasOwnProperty(key)) {
      const value = window.localStorage.getItem(key);
      console.log(key + ' : ' + value);
    }
  }
}

function removeLocalStorage(key) {
  return window.localStorage.removeItem(key);
}

function clearLocalStorage() {
  return window.localStorage.clear();
}

export default Storage;
