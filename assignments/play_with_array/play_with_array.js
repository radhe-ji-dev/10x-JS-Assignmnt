function getEven(arr) {
  ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      ans.push(arr[i]);
    }
  }
  return ans;
}

function multiplyByN(arr, n) {
  /*Return an array whose elements are multiplied by n
   */
  ans = [];
  for (let i = 0; i < arr.length; i++) {
    ans.push(arr[i] * n);
  }
  return ans;
}

function removeNthElement(arr, n) {
  /*
        Return the array with the element present at index n removed
        Example
            Input: [1,3,4,6,7] 3
            Output: [1,3,4,7]
        Write you code below
    */
  arr.splice(n, 1);
  return arr;
}
//some coment added
module.exports = {
  getEven,
  multiplyByN,
  removeNthElement,
};
