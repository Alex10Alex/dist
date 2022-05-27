'use strict';


// function showThis(a,b){
//     console.log(this);
//     function sum(){
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum);
// }
// showThis(4,5);


// const obj = {
//     a:20,
//     b:56,
//     sum:function(){
//         console.log(this);
//     }
// };
// obj.sum();

//  function User(name, id){
//      this.name = name;
//      this.id = id;
//      this.human = true;
//  }
//  let ivan = new User('Ivan', 23);

// function sayName(surname){
//     console.log(this);
//     console.log(this.name + surname);
//     }
// const user ={
//   name:'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith'] );

// function count(num){
//     return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));




// 1) Обычная функция : this = window, если usestrict  то undefinded
// 2) Контекст у методов обьекта - сам обьект
// 3) this в конструкторах и классах  - это новый экземпляр обьекта
// 4)Ручная привязка this: call, apply, bind

// const btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//     this.style.backgroundColor = 'red';
// });

// const obj = {
//     num:5,
//     sayNumber: function(){
//         const say = () =>{
//             console.log(this);
//         };
//        say();
//     }
// };
// obj.sayNumber();

// const double = a => a * 2;

const log = function(a, b, ...rest){
    console.log(a, b, rest);
};
log('werqer', 'ffaggsf', 'gasfs', 'fshfjh;sf');

function calcOrDouble(number, basis = 2){
    // basis = basis || 2;
    console.log(number*basis);
}
calcOrDouble(4,6);