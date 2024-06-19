//  Bodlogo 1
function aliIkhToo(a1, a2) {
  if (a1 > a2) {
    return a1;
  } else if (a2 > a1) {
    return a2;
  } else {
    return "tentsuu too bn";
  }
}

let ikhToo = aliIkhToo(20, 45);
console.log("Ali ni ikh too ve: ", ikhToo);

// //  Bodlogo 2
let toonuud = [1, 2, 3, 4, 5];

function findIndex(searchArr, findToo) {
  console.log("Search Arr: ", searchArr);
  console.log("Find too: ", findToo);
  for (let i = 0; i < searchArr.length; i++) {
    if (searchArr[i] === findToo) {
      return i;
    }
  }
  return -1;
}
let index = findIndex(toonuud, 4);
console.log("Index ", index);

//  3.0гегдсен тэмдэгт мереес -аас егегдсен тэмдэгт байгаа эсэхийг олох функц бич. Тухайн тэмдэгт байвал индексийг буцаана. Байхгуй бол - 1 буцаана.
let nameArr = ["Bat", "Dorj", "Saraa"];

function findTemdegt(searcArr, findTemdegt) {
  console.log("Search Arr: ", searcArr);
  console.log("Find temdegt: ", findTemdegt);
  for (i = 0; i < searcArr.length; i++) {
    if (searcArr[i] === findTemdegt) return i;
  }
  return -1;
}
let findName = "Dorj";
let nameIndex = findTemdegt(nameArr, findName);
console.log("Name index: ", nameIndex);

//  4.Огегдсен array - ийн дундажыг олох функц бич.
let dundajArr = [13, 14, 15, 16];
let dundaj = 0;
// function dundajOloh(searchArr, dundaj) {
//   console.log("Ugugdsun array: ", searchArr);
//   for (i = 0; i < searchArr; i++) {
//     sum = sum + i;
//   }
//   console.log(sum);
//   dundaj = sum / searchArr.lenth;
//   return dundaj;
// }
function dundajOloh(dundajArr) {
  console.log("arr", dundajArr);
  let sum = 0;
  let dundaj = 0;
  for (let i = 0; i < dundajArr.length; i++) {
    sum = sum + dundajArr[i];
  }
  return (dundaj = sum / dundajArr.length);
}
let etssiinDundaj = dundajOloh(dundajArr, dundaj);
console.log("Dundaj too: ", etssiinDundaj);

// 5.Огегдсен array - ийн нийлбэрийг олох функц бич.
let niilberArr = [20, 30, 40];
function niilber(niilberArr) {
  let sum = 0;
  console.log("niilber arr", niilberArr);
  for (i = 0; i < niilberArr.length; i++) {
    sum = sum + niilberArr[i];
  }
  return sum;
}
console.log("Niilber: ", niilber(niilberArr));

// 6.0гегдсен тоо анхны эсэхиг олох функц бич.
function ankhniiTooOloh(ankhniiTooArr) {
  for (let i = 0; i < ankhniiTooArr.length; i++) {
    if (ankhniiTooArr[i] / 1 === ankhniiTooArr[i]) return ankhniiTooArr[i];
  }
  return "Ankhnii too bish bn";
}
console.log("Ankhnii too:", ankhniiTooOloh(12));

// 7.Palindrome too eseh jishee ni: input: 121 output: true, input: -121 output: false, input: 12 output: false
function Palindrome(num) {
  let numToStringArray = num.toString();
  var len = numToStringArray.length;
  if (len < 2) {
    return "It's a palindrome";
  } else {
    for (var i = 0; i < len / 2; i++) {
      if (numToStringArray[i] !== numToStringArray[len - 1 - i]) {
        return "It's not a palindrome";
      }
      return "It's a palindrome";
    }
  }
}

console.log(Palindrome(989));
console.log(Palindrome(23));
console.log(Palindrome(9));

//  Bodlogo 8
let students = [
  { name: "Сэд-Эрдэнэ", age: 19, gender: "male", points: 70 },

  { name: "Индра", age: 19, gender: "female", points: 50 },

  { name: "Хатнаа ", age: 21, gender: "male", points: 99 },

  { name: "Тэмүүлэн", age: 23, gender: "male", points: 55 },

  { name: "Намуун", age: 23, gender: "female", points: 85 },
];

console.log("Ekhnii object: ", students[0]);

function huisTooloh(students) {
  let maleNiit = 0;
  let femaleNiit = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].gender === "male") {
      maleNiit++;
    } else if (students[i].gender === "female") {
      femaleNiit++;
    }
  }
  return { male: maleNiit, female: femaleNiit };
}
let huisiinToo = huisTooloh(students);
console.log("Huisiin too: ", huisiinToo);

// Сурагчдын насны дунджийг олох функц бичих
function ageAverage(avg) {
  let studensNiitNas = 0;
  for (i = 0; i < students.length; i++) {
    studensNiitNas += students[i].age;
  }
  return (avg = studensNiitNas / students.length);
}
let dundajNas = ageAverage(students);
console.log("Dundaj nas: ", dundajNas);

// Нас нь 21-ээс дээш буюу тэнцүү сурагчдыг ол
function above21(utga) {
  let ageAbove21 = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].age >= 21) {
      ageAbove21 = ageAbove21 + 1;
    }
  }
  return ageAbove21;
}
let nas21eesDeesh = above21(students);
console.log("21-ээс дээш буюу тэнцүү сурагчдын тоо ", nas21eesDeesh);

// 60-аас дээш оноо авсан cурагчдийг тоол
function point() {
  let above60too = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].points > 60) {
      above60too = above60too + 1;
    }
  }
  return above60too;
}
let above60too = point(students);
console.log("60-аас дээш оноо авсан cурагчдийн тоо", above60too);
