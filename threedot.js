const age=[12,13,14,15];
const age2=[99,88,66,55];
const age3=[66,44,77,33];
const totalAges=age.concat(age2).concat([5]).concat(age3);
//console.log(totalAges)
const totalAges2=[...age,...age2,...([5]),...age3];
console.log(totalAges2);

const takaPoisa=Math.max(...totalAges2);
const takaPoisa2=Math.min(...totalAges2);
console.log("Maximum Number is : ",takaPoisa);
console.log("Minimum Number is : ",takaPoisa2);