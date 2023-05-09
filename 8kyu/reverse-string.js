// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// My Solution

function solution(str){
    let splitStr = str.split("");
    let reverseArr = splitStr.reverse();
    let joinArr = reverseArr.join("");
    return joinArr;
  }

// Best Practice Solution

function solution(str){
    return str.split('').reverse().join('');  
  }