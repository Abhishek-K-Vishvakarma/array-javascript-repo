// We have seen of Max and Min:

var arr = [5, 27, 25, 7, 8, 90, 105];
var max = arr[0];
var min = arr[0];
var sum = 0;
for (let i = 1; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
  if (min > arr[i]) {
    min = arr[i];
  }
}
console.log("Max : "+ max +" , "+ "Min : "+ min); // Output(Answer) is: Max : 105 , Min : 5

// Sum of Max and Min:
sum += max + min;
console.log("Sum of max & min of : "+sum); // 110 output.


// Reverse method in array: 

let result = arr.reverse();
console.log(result);

// Accending and descending order by sort method:

let res = arr.sort((a, b)=> a-b); // Ascending order.
console.log(res);

let total = arr.sort((a,b)=> b-a);
console.log(total);


