//get user input and check whether it is palindrome or not using js
//two methods to do this, first is by loops and second is by arrays.

//using loop
/* var checkPalindrome = function() {
    var userInput = document.getElementById('input').value;
    var len = userInput.length;
    var flag = true;
    for (var i = 0; i < len / 2; i++) {
        if (userInput[i] != userInput[len - 1 - i]) {
            flag = false;
            break;
            }
            }
            if (flag) {
                document.getElementById('result').innerHTML = `"${userInput}" is Palindrome`; 
                        }
                else {
                    document.getElementById('result').innerHTML = `"${userInput}" is not a Palindrome`;
                        }
                    }
                    //add event listener to button
                    document.getElementById('button').addEventListener('click', checkPalindrome);
*/

//second method using arrays. 
function checkPalindrome() {
    var input = document.getElementById('input').value;
    var userInput = input.toLowerCase().replace(/[^a-z 0-9]/g, ''); // this will convert string to
    // lower case and change special characters or anyother things with blank. 
    var arr = userInput.split(''); //this nethod will convert string to array.
    var reversedArr = arr.reverse(); //this will reverse the items of array.
    var reversedStr = reversedArr.join(''); // this will join the reversed items of array to string.
    if (userInput == reversedStr) {
        document.getElementById('result').innerHTML = `"${userInput}" is Palindrome`;
        }
        else {
            document.getElementById('result').innerHTML = `"${userInput}" is not a Palindrome`;
            }
}