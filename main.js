const example1 = document.getElementById('e1-child1')
// console.log('example1: ', example1)
example1.style.backgroundColor = 'red'
const example2 = document.getElementsByClassName('e2-children')
// console.log('example2: ', example2[0].innerText)

const example3 = document.querySelector('#e3-parent #e3-child3')
console.log('example3: ', example3)

// querySelector | first
// const example3Id = document.getElementById('e3-parent')
// const example4 = example3Id.querySelectorAll("button")
// console.log('example', example4)

const example4 = document.querySelectorAll('#e4-parent .e4-child3')
console.log('example4', example4)

const example5 = document.querySelector('[data-e5-child1]')
console.log('example5', example5.innerHTML)


// legacy function vs arrow function

// legacy
function handleCheck () {
  console.log(this.name, this.age)
}

const person1 = {
  name: 'Chad',
  age: 25,
  isStudent: handleCheck
}

const person2 = {
  name: 'Sam',
  age: 22,
  isStudent: handleCheck
}

person1.isStudent()
person2.isStudent()

// arrow

// const handleCheck = (name, age) => {
//   console.log(name, age)
// }

// handleCheck('Chad', 25)
// handleCheck('Sam', 22)