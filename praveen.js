// filter function


if (!Array.prototype.Filter) {
    Array.prototype.Filter = function(callback, thisArg) {
      if (this == null) {
        throw new TypeError('Array.prototype.bhaiFilter called on null or undefined');
      }
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }
  
      const result = [];
      const array = Object(this);
      const len = array.length >>> 0;
  
      for (let i = 0; i < len; i++) {
        if (i in array) {
          const val = array[i];
          if (callback.call(thisArg, val, i, array)) {
            result.push(val);
          }
        }
      }
  
      return result;
    };
  }
  
  
  // const numbers = [1, 2, 3, 4, 5, 6];
  
  // // Use Filter to filter out even numbers
  // const evenNumbers = numbers.Filter(function(number) {
  //   return number % 2 === 0;
  // });
  
  // console.log(evenNumbers); // Output: [2, 4, 6]
  
  
  
  
  
  // // sort function
  
  if (!Array.prototype.Sort) {
    Array.prototype.Sort = function(compareFunction) {
      if (this == null) {
        throw new TypeError('Array.prototype.Sort called on null or undefined');
      }
  
      const array = Object(this);
      const len = array.length >>> 0;
  
      // Default compare function if none is provided
      compareFunction = compareFunction || function(a, b) {
        const aStr = String(a);
        const bStr = String(b);
        if (aStr < bStr) return -1;
        if (aStr > bStr) return 1;
        return 0;
      };
  
      // Implementing a simple bubble sort for educational purposes
      for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
          if (compareFunction(array[j], array[j + 1]) > 0) {
            // Swap the elements
            const temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
          }
        }
      }
  
      return array;
    };
  }
  
  
  // // how to use
  
  // const numbers = [5, 3, 8, 1, 2];
  
  // // Use Sort to sort numbers in ascending order
  // numbers.Sort();
  
  // console.log(numbers); // Output: [1, 2, 3, 5, 8]
  
  // // Use Sort with a custom compare function to sort in descending order
  // numbers.Sort(function(a, b) {
  //   return b - a;
  // });
  
  // console.log(numbers); // Output: [8, 5, 3, 2, 1]
  
  
  
  
  //find function
  
  
  // // Polyfill for Array.prototype.bhaiFind
  if (!Array.prototype.Find) {
    Array.prototype.Find = function(callback, thisArg) {
      if (this == null) {
        throw new TypeError('Array.prototype.Find called on null or undefined');
      }
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }
  
      const array = Object(this);
      const len = array.length >>> 0;
  
      for (let i = 0; i < len; i++) {
        if (i in array) {
          const value = array[i];
          if (callback.call(thisArg, value, i, array)) {
            return value; // Return the first element that satisfies the callback
          }
        }
      }
  
      return undefined; // Return undefined if no element satisfies the callback
    };
  }
  
  
  
  
  // const numbers = [5, 12, 8, 130, 44];
  
  // // Use Find to find the first number greater than 10
  // const found = numbers.Find(function(number) {
  //   return number > 10;
  // });
  
  // console.log(found); // Output: 12
  
  
  
  
  // reduces funtion
  
  
  // // Polyfill for Array.prototype.bhaiReduce
  if (!Array.prototype.Reduce) {
    Array.prototype.Reduce = function(callback, initialValue) {
      if (this == null) {
        throw new TypeError('Array.prototype.Reduce called on null or undefined');
      }
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }
  
      const array = Object(this);
      const len = array.length >>> 0;
      let accumulator = initialValue;
      let startIndex = 0;
  
      // If initialValue is not provided, use the first element of the array
      if (arguments.length < 2) {
        if (len === 0) {
          throw new TypeError('Reduce of empty array with no initial value');
        }
        accumulator = array[0];
        startIndex = 1;
      }
  
      for (let i = startIndex; i < len; i++) {
        if (i in array) {
          accumulator = callback(accumulator, array[i], i, array);
        }
      }
  
      return accumulator;
    };
  }
  
  
  
  
  // const numbers = [1, 2, 3, 4, 5];
  
  // // Use Reduce to sum all numbers
  // const sum = numbers.Reduce(function(accumulator, currentValue) {
  //   return accumulator + currentValue;
  // }, 0);
  
  // console.log(sum); // Output: 15
  
  // // Use Reduce to find the product of all numbers
  // const product = numbers.Reduce(function(accumulator, currentValue) {
  //   return accumulator * currentValue;
  // }, 1);
  
  // console.log(product); // Output: 120
  
  
  
  
  // VSEvery function
  
  
  // // Polyfill for Array.prototype.bhaiVSEvery
  if (!Array.prototype.VSEvery) {
    Array.prototype.VSEvery = function(callback, thisArg) {
      if (this == null) {
        throw new TypeError('Array.prototype.VSEvery called on null or undefined');
      }
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }
  
      const array = Object(this);
      const len = array.length >>> 0;
  
      for (let i = 0; i < len; i++) {
        if (i in array) {
          if (!callback.call(thisArg, array[i], i, array)) {
            return false; // Return false if any element does not satisfy the callback
          }
        }
      }
  
      return true; // Return true if all elements satisfy the callback
    };
  }
  
  
  
  
  // const numbers = [2, 4, 6, 8, 10];
  
  // // Use VSEvery to check if all numbers are even
  // const allEven = numbers.VSEvery(function(number) {
  //   return number % 2 === 0;
  // });
  
  // console.log(allEven); // Output: true
  
  // const mixedNumbers = [1, 2, 3, 4, 5];
  
  // // Use VSEvery to check if all numbers are greater than 0
  // const allPositive = mixedNumbers.VSEvery(function(number) {
  //   return number > 0;
  // });
  
  // console.log(allPositive); // Output: true
  
  
  
  //  VSSome function
  
  // // Polyfill for Array.prototype.VSSome
  if (!Array.prototype.VSSome) {
    Array.prototype.VSSome = function(callback, thisArg) {
      if (this == null) {
        throw new TypeError('Array.prototype.VSSome called on null or undefined');
      }
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }
  
      const array = Object(this);
      const len = array.length >>> 0;
  
      for (let i = 0; i < len; i++) {
        if (i in array) {
          if (callback.call(thisArg, array[i], i, array)) {
            return true; // Return true if any element satisfies the callback
          }
        }
      }
  
      return false; // Return false if no elements satisfy the callback
    };
  }
  
  
  
  
  // const numbers = [1, 3, 5, 7, 9];
  
  // // Use VSSome to check if there is any even number
  // const hasEvenNumber = numbers.VSSome(function(number) {
  //   return number % 2 === 0;
  // });
  
  // console.log(hasEvenNumber); // Output: false
  
  // const mixedNumbers = [1, 2, 3, 4, 5];
  
  // // Use VSSome to check if there is any number greater than 4
  // const hasGreaterThanFour = mixedNumbers.VSSome(function(number) {
  //   return number > 4;
  // });
  
  // console.log(hasGreaterThanFour); // Output: true
  
// ----------------------------------------
  
  // string methoda
  
  
  //stringLength
  
  
  // // Adding stringLength function to String prototype
  if (!String.prototype.stringLength) {
    String.prototype.stringLength = function() {
      if (this == null) {
        throw new TypeError('String.prototype.stringLength called on null or undefined');
      }
  
      let count = 0;
      while (this[count] !== undefined) {
        count++;
      }
      return count;
    };
  }
  
  
  
  
  // const str = "Hello, World!";
  
  // // Use stringLength to get the length of the string
  // const length = str.stringLength();
  
  // console.log(length); // Output: 13
  
  
  
  
  // VSCharAt
  
  
  // // Polyfill for String.prototype.bhaiVSCharAt
  if (!String.prototype.bhaiVSCharAt) {
    String.prototype.VSCharAt = function(index) {
      if (this == null) {
        throw new TypeError('String.prototype.VSCharAt called on null or undefined');
      }
  
      const str = String(this);
      const len = str.length;
  
      // If index is out of range, return an empty string
      if (index < 0 || index >= len) {
        return '';
      }
  
      return str[index];
    };
  }
  
  
  
  // // how to use
  // const str = "Hello, World!";
  
  // // Use VSCharAt to get the character at a specific index
  // const VSCharAt5 = str.VSCharAt(5);
  // const VSCharAt11 = str.VSCharAt(11);
  
  // console.log(VSCharAt5);  // Output: ","
  // console.log(VSCharAt11); // Output: "d"
  
  // // Index out of range example
  // const VSCharAt20 = str.VSCharAt(20);
  
  // console.log(VSCharAt20); // Output: ""
  
  
  
  // VSLastIndexOf 
  
  
  // // Polyfill for String.prototype.bhaiVSLastIndexOf
  if (!String.prototype.VSLastIndexOf) {
    String.prototype.VSLastIndexOf = function(searchString, position) {
      if (this == null) {
        throw new TypeError('String.prototype.VSLastIndexOf called on null or undefined');
      }
  
      const str = String(this);
      const searchStr = String(searchString);
      const len = str.length;
      const searchLen = searchStr.length;
  
      // If position is undefined or null, set it to the maximum possible value
      let pos = position === undefined ? len : Number(position);
  
      // Start search from the last character if the position is greater than the string length
      pos = Math.min(pos, len - searchLen);
  
      // Search for the substring from right to left
      for (let i = pos; i >= 0; i--) {
        if (str.substring(i, i + searchLen) === searchStr) {
          return i; // Return the index if the substring is found
        }
      }
  
      return -1; // Return -1 if the substring is not found
    };
  }
  
  
  // how to use
  
  // const str = "Hello, World! Hello!";
  
  // // Use VSLastIndexOf to find the last occurrence of a substring
  // const VSLastIndexOfHello = str.VSLastIndexOf("Hello");
  // const VSLastIndexOfWorld = str.VSLastIndexOf("World");
  
  // console.log(VSLastIndexOfHello); // Output: 14 (the last "Hello" starts at index 14)
  // console.log(VSLastIndexOfWorld); // Output: 7 (the "World" starts at index 7)
  
  // // Search for a substring that doesn't exist
  // const VSLastIndexOfTest = str.VSLastIndexOf("Test");
  
  // console.log(VSLastIndexOfTest); // Output: -1
  
  
  
  // VSToUpperCase
  
  // // Polyfill for String.prototype.VSToUpperCase
  if (!String.prototype.VSToUpperCase) {
    String.prototype.VSToUpperCase = function() {
      if (this == null) {
        throw new TypeError('String.prototype.VSToUpperCase called on null or undefined');
      }
  
      const str = String(this);
      const upperStr = [];
  
      for (let i = 0; i < str.length; i++) {
        const char = str[i];
        // Convert to uppercase using ASCII values
        const code = char.charCodeAt(0);
  
        if (code >= 97 && code <= 122) {
          // Lowercase letter (a-z)
          upperStr.push(String.fromCharCode(code - 32));
        } else {
          // Non-lowercase letter
          upperStr.push(char);
        }
      }
  
      return upperStr.join('');
    };
  }
  
  
  // how to use
  
  
  // const str = "Hello, World!";
  
  // // Use VSToUpperCase to convert the string to uppercase
  // const upperStr = str.VSToUpperCase();
  
  // console.log(upperStr); // Output: "HELLO, WORLD!"
  
  
  
  
  // to lowercase
  
  
  
  // // Polyfill for String.prototype.bhaiVSToLowerCase
  if (!String.prototype.VSToLowerCase) {
    String.prototype.VSToLowerCase = function() {
      if (this == null) {
        throw new TypeError('String.prototype.VSToLowerCase called on null or undefined');
      }
  
      const str = String(this);
      const lowerStr = [];
  
      for (let i = 0; i < str.length; i++) {
        const char = str[i];
        // Convert to lowercase using ASCII values
        const code = char.charCodeAt(0);
  
        if (code >= 65 && code <= 90) {
          // Uppercase letter (A-Z)
          lowerStr.push(String.fromCharCode(code + 32));
        } else {
          // Non-uppercase letter
          lowerStr.push(char);
        }
      }
  
      return lowerStr.join('');
    };
  }
  
  
  // // how to use
  
  
  
  // const str = "Hello, World!";
  
  // // Use VSToLowerCase to convert the string to lowercase
  // const lowerStr = str.VSToLowerCase();
  
  // console.log(lowerStr); // Output: "hello, world!"
  
  
  
  //VSConcat
  
  // // Polyfill for String.prototype.bhaiVSConcat
  if (!String.prototype.VSConcat) {
    String.prototype.VSConcat = function(...strings) {
      if (this == null) {
        throw new TypeError('String.prototype.VSConcat called on null or undefined');
      }
  
      // Convert the context to a string
      let str = String(this);
  
      // Append each argument string to the original string
      for (let i = 0; i < strings.length; i++) {
        str += String(strings[i]);
      }
  
      return str;
    };
  }
  
  
  
  //how to use
  
  
  // const str1 = "Hello";
  // const str2 = " ";
  // const str3 = "World!";
  // const str4 = " How are you?";
  
  // // // Use VSConcat to VSConcatenate multiple strings
  // const result = str1.VSConcat(str2, str3, str4);
  
  // console.log(result); // Output: "Hello World! How are you?"
  
  // dec str1 = "Hello";
  // dec str2 = " ";
  // dec str3 = "World!";
  // dec str4 = " How are you?";
  
  // // // Use VSConcat to VSConcatenate multiple strings
  // dec result = str1.VSConcat(str2, str3, str4);
  
  // console.log(result); // Output: "Hello World! How are you?"
  
  // Polyfill for Array.prototype.bhaiIncludes
  if (!Array.prototype.Includes) {
      Array.prototype.Includes = function(element, fromIndex = 0) {
        if (this == null) {
          throw new TypeError('Array.prototype.Includes called on null or undefined');
        }
    
        const arr = Object(this);
        const len = arr.length >>> 0; // Ensures length is a non-negative integer
    
        // If the array is empty, return false
        if (len === 0) {
          return false;
        }
    
        // Convert fromIndex to an integer
        let start = fromIndex | 0;
    
        // If fromIndex is negative, calculate the start index from the end of the array
        if (start < 0) {
          start = Math.max(len + start, 0);
        }
    
        // Iterate through the array to check if the element is present
        for (let i = start; i < len; i++) {
          // Use SameValueZero comparison (similar to ===, but treats NaN === NaN)
          if (arr[i] === element || (typeof arr[i] === 'number' && typeof element === 'number' && isNaN(arr[i]) && isNaN(element))) {
            return true;
          }
        }
    
        return false; // Element not found
      };
    }
  
  //   const arr = [1, 2, 3, 4, NaN];
  
  // // Use Includes to check if the array contains a specific element
  // console.log(arr.Includes(3)); // Output: true
  // console.log(arr.Includes(5)); // Output: false
  // console.log(arr.Includes(NaN)); // Output: true
  
  // // Using fromIndex to specify the starting search position
  // console.log(arr.Includes(2, 2)); // Output: false
  // console.log(arr.Includes(2, 1)); // Output: true
  
  // if (!Number.prototype.isPrime) {
  //     Number.prototype.isPrime = function() {
  //         if (!Number.isInteger(this)) {
  //             throw new TypeError('isPrime expects an integer');
  //         }
          
  //         if (this < 2) return false;
  //         for (let i = 2, sqrt = Math.sqrt(this); i <= sqrt; i++) {
  //             if (this % i === 0) return false;
  //         }
  //         return true;
  //     };
  // }
  
  
  
  // // Example usage:
  // // const num = 7;
  // // console.log(num.isPrime()); // true
    
  
  // Adding a custom method to Number's prototype to check if a number is prime
  if (!Number.prototype.isPrime) {
      Number.prototype.isPrime = function() {
          // Ensure ⁠ this ⁠ is treated as a number and check if it is an integer
          const num = Number(this);
          if (!Number.isInteger(num)) {
              throw new TypeError('isPrime expects an integer');
          }
          
          // Check if the number is less than 2
          if (num < 2) return false;
          
          // Check for factors up to the square root of the number
          for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
              if (num % i === 0) return false;
          }
          
          // Number is prime
          return true;
      };
    }
  
  
    // Operators Object
  const Operators = {
      // Arithmetic Operators
      Add: function(a, b) {
        return a + b;
      },
    
      Subtract: function(a, b) {
        return a - b;
      },
    
      Multiply: function(a, b) {
        return a * b;
      },
    
      Divide: function(a, b) {
        if (b === 0) {
          throw new Error('Division by zero is not allowed');
        }
        return a / b;
      },
    
      Modulus: function(a, b) {
        return a % b;
      },
    
      Exponent: function(a, b) {
        return Math.pow(a, b);
      },
    
      // Comparison Operators
      Equal: function(a, b) {
        return a == b;
      },
    
      StrictEqual: function(a, b) {
        return a === b;
      },
    
      NotEqual: function(a, b) {
        return a != b;
      },
    
      StrictNotEqual: function(a, b) {
        return a !== b;
      },
    
      GreaterThan: function(a, b) {
        return a > b;
      },
    
      GreaterThanOrEqual: function(a, b) {
        return a >= b;
      },
    
      LessThan: function(a, b) {
        return a < b;
      },
    
      LessThanOrEqual: function(a, b) {
        return a <= b;
      },
    
      // Logical Operators
      And: function(a, b) {
        return a && b;
      },
    
      Or: function(a, b) {
        return a || b;
      },
    
      Not: function(a) {
        return !a;
      },
    
      // Bitwise Operators
      BitwiseAnd: function(a, b) {
        return a & b;
      },
    
      BitwiseOr: function(a, b) {
        return a | b;
      },
    
      BitwiseXor: function(a, b) {
        return a ^ b;
      },
    
      BitwiseNot: function(a) {
        return ~a;
      },
    
      LeftShift: function(a, b) {
        return a << b;
      },
    
      RightShift: function(a, b) {
        return a >> b;
      },
    
      UnsignedRightShift: function(a, b) {
        return a >>> b;
      },
    
      // Ternary Operator (Conditional)
      Ternary: function(condition, trueResult, falseResult) {
        return condition ? trueResult : falseResult;
      },
    
      // Assignment Operators (can be used with variables)
      Assign: function(variable, value) {
        return variable = value;
      },
    
      AddAssign: function(variable, value) {
        return variable += value;
      },
    
      SubtractAssign: function(variable, value) {
        return variable -= value;
      },
    
      MultiplyAssign: function(variable, value) {
        return variable *= value;
      },
    
      DivideAssign: function(variable, value) {
        return variable /= value;
      },
    
      ModulusAssign: function(variable, value) {
        return variable %= value;
      },
    
      ExponentAssign: function(variable, value) {
        return variable **= value;
      }
    };
    
    // Example usage:
    
    // Arithmetic
  //   console.log(Operators.Add(5, 3)); // Output: 8
  //   console.log(Operators.Divide(10, 2)); // Output: 5
    
  //   // Comparison
  //   console.log(Operators.GreaterThan(5, 3)); // Output: true
  //   console.log(Operators.Equal(5, '5')); // Output: true
    
  //   // Logical
  //   console.log(Operators.And(true, false)); // Output: false
  //   console.log(Operators.Or(true, false)); // Output: true
    
  //   // Bitwise
  //   console.log(Operators.BitwiseAnd(5, 3)); // Output: 1
    
  //   // Ternary
  //   console.log(Operators.Ternary(5 > 3, 'Yes', 'No')); // Output: 'Yes'
    
  //   // Assignment
  //   let x = 5;
  //   x = Operators.AddAssign(x, 10);
  //   console.log(x); // Output: 15
    
  
  
    // Input Object...........................................................................................................................................................................
  
  
  
    // const Input = {
    //   // Method to get user input from a prompt
    //   bhaiPromptInput: function(message) {
    //     if (typeof message !== 'string') {
    //       throw new TypeError('Message must be a string');
    //     }
    
    //     // Prompt user for input with a custom message
    //     return prompt(message);
    //   },
    
    //   // Method to retrieve value from an input field by selector
    //   GetInputValue: function(selector) {
    //     if (typeof selector !== 'string') {
    //       throw new TypeError('Selector must be a string');
    //     }
    
    //     // Use Selector to find the input element
    //     const inputElement = Selector.QuerySelector(selector);
        
    //     if (inputElement && inputElement.tagName === 'INPUT' || inputElement.tagName === 'TEXTAREA') {
    //       return inputElement.value;
    //     } else {
    //       throw new Error('Element is not an input or textarea');
    //     }
    //   },
    
    //   // Method to set value to an input field by selector
    //   SetInputValue: function(selector, value) {
    //     if (typeof selector !== 'string') {
    //       throw new TypeError('Selector must be a string');
    //     }
    
    //     // Use Selector to find the input element
    //     const inputElement = Selector.QuerySelector(selector);
    
    //     if (inputElement && (inputElement.tagName === 'INPUT' || inputElement.tagName === 'TEXTAREA')) {
    //       inputElement.value = value;
    //     } else {
    //       throw new Error('Element is not an input or textarea');
    //     }
    //   },
    
    //   // Method to add an event listener to an input field
    //   AddInputEventListener: function(selector, eventType, callback) {
    //     if (typeof selector !== 'string' || typeof eventType !== 'string' || typeof callback !== 'function') {
    //       throw new TypeError('Invalid arguments');
    //     }
    
    //     const inputElement = Selector.QuerySelector(selector);
        
    //     if (inputElement) {
    //       inputElement.addEventListener(eventType, callback);
    //     } else {
    //       throw new Error('Element not found');
    //     }
    //   }
    // };
    
  //   // Example usage:
    
  //   // 1. Prompt user for input
  //   const userInput = Input.PromptInput('Enter your name:');
  //   console.log('User input:', userInput);
    
  //   // 2. Get value from an input field
  //   const inputValue = Input.GetInputValue('#myInput');
  //   console.log('Input field value:', inputValue);
    
  //   // 3. Set value to an input field
  //   Input.SetInputValue('#myInput', 'New Value');
    
  //   // 4. Add event listener to an input field
  //   Input.AddInputEventListener('#myInput', 'input', function(event) {
  //     console.log('Input changed to:', event.target.value);
  //   });

