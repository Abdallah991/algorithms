function nestedEvenSum (obj) {
    // declare sum
    var sum =0; 
    // 1- declare helper function that looks inside the obj
    function addSum(partObj){
        for (let key in partObj) {
            // 1.1 if part object is object
            if (typeof partObj[key] === 'object'){
            // 1.2 call function recursively
            addSum(partObj[key]);
            }
            // 1.3 if not object check if number and if its event
            if (typeof partObj[key] === 'number' && partObj[key]%2 == 0) {
               // 1.4 add to sum
                sum += partObj[key];
            }
        }
    }
    // 2- call helper function 
    addSum(obj)
    // 3- return sum;

    return sum;
  }
  var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }

  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
  console.log(nestedEvenSum(obj1)); // 6
  console.log(nestedEvenSum(obj2)); // 10