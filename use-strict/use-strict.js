// flag = true;
// console.log(flag)  // Output: true

// 'use strict'
// flag = 'true'
// console.log(flag) // Output: Uncaught ReferenceError: flag is not defined

// flag = true;
// 'use strict';
// console.log(flag);  // Output: true

// ***Functions***

// flag = true;
// console.log(flag)
// function foo(){
//     'use strict';
//     a = 10;
//     console.log(a)
// }
// foo();

// ***Keywords***

// 'use strict'
// var let = 1;
// console.log(let)

// ***Quiz***


// 'use strict'
// var foo = 1;
// delete foo;
// console.log(foo);

// 'use strict'
// var foo2 = () => {};
// delete foo2;
// console.log(foo2)

// 'use strict'
// var a = 2;
// eval("var a = 10"); 
// console.log(a)

// 'use strict'
// function foo(){
//     console.log(this)
// }
// foo();

// var obj = {
//     foo: function(){
//         // 'use strict'
//         console.log(this);

//         function bar(){
//             console.log(this)
//         }
//         bar();
//     }
// }
// console.log(obj.foo());