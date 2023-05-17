'use strict';
const pwEl = document.getElementById('pw');
const copyEl = document.getElementById('copy');
const lengthEl = document.getElementById('length');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '|@#$^%&*()_+=';

function getLowerCase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUpperCase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  const len = lengthEl.value;

  let password = '';
  for (let i = 0; i < len; i++) {
    const x = generateX();
    password += x;
  }

  pwEl.innerText = password;
}

function generateX() {
  const arr = [];

  if (upperEl.checked) {
    arr.push(getUpperCase());
  }

  if (lowerEl.checked) {
    arr.push(getLowerCase());
  }

  if (numberEl.checked) {
    arr.push(getNumber());
  }

  if (symbolEl.checked) {
    arr.push(getSymbol());
  }

  if (arr.length === 0) {
    return '';
  }

  return arr[Math.floor(Math.random() * arr.length)];
}

generateEl.addEventListener('click', generatePassword);

copyEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = pwEl.innerText;

  if (!password) {
    return;
  }

  navigator.clipboard
    .writeText(password)
    .then(() => {
      alert('Password copied to clipboard');
    })
    .catch((error) => {
      alert('Failed to copy text:', error);
    });
});
