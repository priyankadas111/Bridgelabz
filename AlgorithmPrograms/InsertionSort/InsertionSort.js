/**********************************************************************************************
* purpose   : Read in a list of words from File. Then prompt the user to enter a word to search the list.
  he program reports if the search word is found in the list.
*  Auther   : priyankadas
*  File     : InsertionASort.js
*  since    : 16/11/2019 
********************************************************************************************************/
let take = require('./InsertionSortBL')
let read = require('readline-sync')
try {
    let n = read.question("enter the size");
    let a = new Array(n);//declaring a array
    for (let i = 1; i < n; i++) //taking the element from the array
    {
        a[i] = read.question("enter the element to the array");
    }
    take.InsertionSort(n, a);
   }
  catch (error) {
    Console.log(error);
  }