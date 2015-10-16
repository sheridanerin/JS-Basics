//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  //Code Here

  var inner = outer();

//Once you do that, invoke inner.

  //Code Here

  inner();



//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here
var fullSentence = callFriend();
fullSentence('435-215-9248');

//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  //Code Here
  function makeCounter() {
    var counter = 1;
    return function myCounter() {
      return counter++;
    }
  }


  var count = makeCounter();
  count() // 1
  count() // 2
  count() // 3
  count() // 4



//Next Problem



/*
  Write a function that does something simple (console, alert, etc). 
  Write a second function that accepts the first function as it's first parameter. 
  The second function should return a new third function which, when invoked, 
  invokes the first, original function that was passed in, but will only ever do so once.
*/

  //Code Here
function firstFunction() {
  return console.log('Hi');
}

function secondFunction(fun) {

  return function thirdFunction() {
    var counter = 1;
      if (counter === 1) {
        fun();
        counter++;
      } else {
        return;
      }
  }
}

//Next Problem



/*
  Now, similar to the last problem, write a function called 'fnCounter' that accepts 
  two parameters. The first parameter will be an anonymous function and the second 
  parameter, 'N', will be a number. Now, in 'fnCounter', allow the anonymous funciton 
  to be invoked 'N' number of times. After it's been invoked 'N' number of times, return 'STOP'.
*/

function fnCounter(fun, N) {
  for (var i = 0; i < N; i++) {
    fun();
  }
  return 'stop';
}



//Next Problem



/*
  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };

  Above you have a function named counter. Examine the function (without running the code) 
  then below write what you expect to happen when the funciton is invoked. *Hint: setTimeout 
  calls a function or evaluates an expression after a specified number of milliseconds.

    //Answer Here */
    I expect that it will console.log(i)<i will change from 1 to 2 to 3.. etc> after 1 second, and then it will again after 2 seconds, 
    again after 3, again after 4, and once more after 5 seconds.   It will not do anything else 
    after that. 


  // Now, run the function in your console and note what happpens.

  // Was your answer right or wrong?


  //   //Answer Here
    wrong.  It printed out the number 6 five times. 


  // Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 
  // then 3, etc)


    //Code Here
  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout(function timer(num) {
          console.log( num );
      }, i*1000, i);
    }
  };



//Next Problem



/*
  Make the following code work

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.
*/


