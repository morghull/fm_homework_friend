'use strict';

const andrei = new Friend('Andrei', 1, []);
const tania = new Friend('Tania', 1, []);
const vasia = new Friend('Vasia', 1, []);

const artur = new Friend('Artur', 1, []);

const petia = new Friend('Petia', 1, []);
const natasha = new Friend('Natasha', 1, []);
const katia = new Friend('Katia', 1, []);

const nastia = new Friend('Nastia', 1, []);
const vlad = new Friend('Vlad', 1, []);

const kiril = new Friend('Kiril', 1, [andrei, tania, vasia]);
const kolia = new Friend('Kolia', 1, [artur]);

const grisha = new Friend('Grisha', 1, [petia, natasha, katia]);
const sergei = new Friend('Sergei', 1, [nastia, vlad]);

const lena = new Friend('Lena', 1, [kiril, kolia]);
const sasha = new Friend('Sasha', 1, [kiril, grisha, sergei]);

const allOfThem = [
  andrei,
  tania,
  vasia,
  artur,
  petia,
  natasha,
  katia,
  nastia,
  vlad,
  kiril,
  kolia,
  grisha,
  sergei,
  lena,
  sasha,
];
console.log(allOfThem);
console.log(lena.gimmeCandies());
console.log(sasha.gimmeCandies());