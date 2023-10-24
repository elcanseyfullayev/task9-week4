// 1.prompt ilə daxil olunan ədədin , 2-nin quvveti  olub olmadigini tapan alqoritm yazin.

// let num = +prompt()
// for (let i = 0; i < 64; i++) {
//     if (Math.pow(2, i) == num) {
//         console.log(true);
//         break
//     } 
//     else {
//         console.log(false);
//     }
// }


// 2.Göndərilmiş 2 ədəddən 1-cisini 2-cisinin qüvvətinə yüksəldən alqoritm yazin 

//     (example: 3 ve 5 ededleri gonderilir , 5 ustu 3 olur oda bize =>125 qayatarir.)

// let a = +prompt("Enter a element");
// let b = +prompt("Enter b element");

// power = a**b
// console.log(power);

// 3.1- den 1000e qeder  ededler icerisinde  reqemleri eyni olan ededlerin cemin tapin. example(11 ,222,333 ve  s)

// let sum1 = 0;
// let sum2 = 0;
// for (let i = 0; i < 100; i++) {
//     if (i % 11 ===0) {
//         sum1 += i
//     }
// }
// for (let a = 100; a < 1000; a++) {
//     if (a % 111 === 0) {
//         sum2 += a
//     }
    
// }    
// console.log(sum2 + sum1);

// 4.Verilmis array-de cut ededlerin en boyuyunu tapan alqoritm yazin.

// const arr = [3,4,36,37,8,12,24];
// let large = arr[0];
// for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] > large && arr[i] % 2 ===0) {
//        large = arr[i];
//     }
    
// }
// console.log(large);

// 5.Verilmis array-de tek ededlerin en kiciyinin index-ni tapan alqoritm yazin.

// const arr = [36,2,4,7,8,12,13,24];
// let small = arr[0];
// let index = 0;

// for (let i = 0; i < arr.length; i++) {
//     if ( arr[i] % 2 !==0) {
//        if (arr[i] < small) {
//         small = arr[i]
//         index = i
//        }
//     }
// }

// console.log(index);


// 6.Verilmis array-de  sade ve murekkeb ededlerin sayini tapan alqoritm yazin.

// const arr = [36,4,7,8,23,26,12,13,24];
// let sade = 0;
// let murekkeb = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0 || i % 3 === 0) {
//         murekkeb += 1
//     }
//     else {
//         sade += 1
//     }
// }

// console.log(murekkeb);
// console.log(sade);

// 8.Verilmish ededin en boyuk reqemini tapan alqoritm yazin. example: 709 en boyuk 9-dir, 37 en boyuk 7-dir.

// let num = 1679;

