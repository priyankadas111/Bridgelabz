/*********************************************************************************************
*purpose    :Reads in integers prints them in sorted order using Bubble Sort
*Auther     : priyankadas
*File       : BubbleSort.js
*since      : 16/11/2019
 ***************************************************************************************************/
const take = require("./BubbleSortBL")
const read = require("readline-sync")
try {
    const n = read.question("enter the size");
    const a = new Array(n);// declaring  array
    for (let i = 0; i < n; i++) // taking the element from a array
    {
        a[i] = read.question("enter the element to the array");
    }
    take.bubbleSort(n, a);
}
catch (error) {
    console.log(error);
}