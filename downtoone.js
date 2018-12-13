// function downToOne(n) {
//     while (n != 1){
//         if (n%2 == 0){
//             var n = n / 2
//             console.log(n)
//         } else if ( n % 2 == 1) {
//             var n = (n*3) + 1
//             console.log(n)
//         } else {
//             console.log(n)
//         }
//     }
// }

// downToOne(13)

// var palen = [];
// function largestPalin(){
//     for (var i = 583; i <1000; i++){
//         for(var j = 583; j<1000;j++){
//             var k = i * j;
//             var stringK = k.toString();
//             var reverseK = stringK.split('').reverse().join('');
//             if (reverseK == stringK){
//                 palen.push(k);
//             }

//         }

//     }
//     return Math.max.apply(null, palen)
//     // return palen
// }

// console.log(palen[palen.length-1])

// console.log(largestPalin())

// var check = true;
// var count = 2520;

// function divisible(){
//     while(check == true){
//         count++;
//         if(count%2==0 && count%3==0 && count%4==0 && count%5==0 && count%6==0 && count%7==0 && count%8==0 && count%9==0 && count%10==0 && count%11==0 && count%12==0 && count%13==0 && count%14==0 && count%15==0 && count%16==0 && count%17==0 && count%18==0 && count%19==0 && count%20==0){
//             console.log(count)
//             check = false
//         }
//     }
// }

// divisible()

// function div(){
//     while(check == true){
//         count++;
//         for(var i = 2; i <20; i++){
//             if (count%i!=0) {
//             checkOnce = false
//         } else {
//             return count
//         }
//     }
// }
// }

var check1 = true;
var num = 2520;
var i = 2

while(check1){
    while(i < 21){
        if (num % i != 0){
            num ++;
            i = 2;
            break;
        } else {
            i++
            if(i==20){
                console.log(num)
                check1 = false
            }
        }
    }
}