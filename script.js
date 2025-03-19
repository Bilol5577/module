import { addNumbers } from './function/add.js';
import { subtractNumbers } from './function/subtract.js';

// Default import - asosiy funksiyalarni chaqirish
import multiply from './function/multiply.js';
import divide from './function/divide.js';  // "devide.js" emas, "divide.js" bo‘lishi kerak!

// DOM elementlarni olish
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');

const addBtn = document.getElementById('addBtn');
const subtractBtn = document.getElementById('subtractBtn');
const multiplyBtn = document.getElementById('multiplyBtn');
const divideBtn = document.getElementById('divideBtn'); // "devideBtn" noto‘g‘ri edi

// Sonlarni olish funksiyasi
function getNumbers() {
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    
    if (isNaN(a) || isNaN(b)) {
        alert("Iltimos, to'g'ri son kiriting!");
        return null;
    }
    return { a, b };
}

// Natijani chiqarish funksiyasi
function showResult(value) {
    result.textContent = `${value}`;
}

// Qo‘shish
addBtn.addEventListener('click', () => {
    const numbers = getNumbers();
    if (numbers) {
        showResult(addNumbers(numbers.a, numbers.b));
    }
});

// Ayirish
subtractBtn.addEventListener('click', () => {
    const numbers = getNumbers();
    if (numbers) {
        showResult(subtractNumbers(numbers.a, numbers.b));
    }
});

// Ko‘paytirish
multiplyBtn.addEventListener('click', () => {
    const numbers = getNumbers();
    if (numbers) {
        showResult(multiply(numbers.a, numbers.b));
    }
});

// Bo‘lish
divideBtn.addEventListener('click', () => {
    const numbers = getNumbers();
    if (numbers) {
        showResult(divide(numbers.a, numbers.b));
    }
});
