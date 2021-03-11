let a = true;
let b = false;
let c = true;
let d = false;

// OR
// akan bernilai true jika salah satu true
console.log(d || a || b);

// AND
// akan bernilai false jika salah satu false
console.log(a && b && c);

let x = 8;
let y = 7;

// lebih besar
console.log(x > y);

// lebih kecil
console.log(x < y);

// sama dengan
console.log(x == y);

// lebih besar sama dengan
console.log(x >= y);

// lebih kecil sama dengan
console.log(x <= y);

let lima = "5";
let limo = 5;

// identik - sama tipe data dan isi
console.log(lima === limo);

console.log(1 && undefined && 2);
console.log(null || 2 && 3 || 4);