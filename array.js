let str = "Abhishek, Vishvakarma!"; 
let result = str.toString();
console.log(result);


let array = [1, 2, 3, 4, 5];
let all = array.concat([6, 7, 8, 9, 10]);
console.log(all);


let Pushmethod = [1, 2, 3, 4];
let allpush = Pushmethod.push(5, 6, 7, 8, 9, 10);
console.log(allpush);


let PopMethod = [5, 6, 2, 3, 7, 8];
let method = PopMethod.pop();
console.log(method);


let shiftMethod = [2, 3, 5, 4, 6, 3, 7, 5, 3];
let filt = shiftMethod.shift();
console.log(filt);

 
let unshiftMethod = ["Ganga", "Gangotri", "Yamuna", "Godavari"];
let unMethod = unshiftMethod.unshift("Indus", "Bramhaputra");
console.log(unMethod);


let deleteMethod = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let deMethod = deleteMethod.splice(5);
console.log(deMethod);


let sliceMethod = "Abhishek Kumar Vishvakarma!";
let slMethod = sliceMethod.slice(0, 8);
console.log(slMethod);


let sortMethod = [6,3,7,4,8,9,1,10,13];
let soMethod = sortMethod.sort((a, b)=> a - b);
console.log(soMethod);


let sMe = [6, 3, 7, 4, 8, 9, 1, 10, 13];
let soMe = sMe.sort((x, y)=> y - x);
console.log(soMe);


let indOfMethod = [1,2 ,3 ,4 ,5, 6, 7,8, 9, 10, 11];
let indMethod = indOfMethod.indexOf(10);
console.log(indMethod);


let reversMethod =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let reversM = reversMethod.reverse();
console.log(reversM);


let findMethod = [1, 2, 3, 7, 0, 24, 5];
let fMe = findMethod.find(e=> e % 2 == 0);
console.log(fMe);


let reduceMethod = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
let allreduce = reduceMethod.reduce((first , second)=> first + second);
console.log(allreduce);

let foreachMethod = ["Array", "Object", "Json", "Function"];
let eachMethod = foreachMethod.forEach(e=>{
  console.log(e);
});

let mapMethod = ["Function", "JSON", "String", "API"];
let mmethod = mapMethod.map(r=>{
  console.log(r);
});

let filterMethod = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ft = filterMethod.filter((item)=> {
  return item % 2 == 0;
});
console.log(ft);

let strr = "ABHISHEK VISHVAKARMA";
let toUpper = strr.toUpperCase();
console.log(toUpper);

// How to get Index of lowercase character...
let strr1 = ["apple", "APPLE", "MANGO", "lower", "orange", "UPPER", "NOWAY", ];
for(let i = 0; i < strr1.length; i++){
    if(strr1[i] == strr1[i].toLocaleLowerCase()){
      console.log(strr1[i]);
    }
}

// How to find index of word...

let all1 = strr1.map((num,ind)=>{
  return {num, ind};
});
console.log(all1);

// How to get length of one by one char length...

for(let i = 0; i < strr1.length; i++){
  console.log(`Index ${i} == Length : ${strr1[i].length}`);
}

// How to get repition of char...

let allstr = "Hello Abhishek Kumar Vishvakarma";
let frequency = {};
for(let char of allstr){
  if(char !== ''){
    if(frequency[char]){
      frequency[char]++;
    }else{
      frequency[char] = 1;
    }
  }
}
console.log(frequency);
