
// setTimeout(function () {
//   console.log('Hola Mike')
// }, 2000)

// const printMyName = () => {
//   console.log('Juana la Cubana')
// }

// console.log('Pedro Escamoso')

// setTimeout(() => {
//   console.log('Juana la Cubana')
// }, 4000)


// // I am getting a fucntion inside of the parameter, the i am callig that funcntin inside of the what function.
// const what = (name) => {
//   name()
// }

// what(printMyName)

// Writing a list 

const myMovies = [{
  "userId": 1,
  "id": 1,
  "title": "quidem molestiae enim",
},
{
  "userId": 2,
  "id": 2,
  "title": "sunt qui excepturi placeat culpa"
},
{
  "userId": 3,
  "id": 3,
  "title": "omnis laborum odio"
},
{
  "userId": 1,
  "id": 4,
  "title": "non esse culpa molestiae omnis sed optio"
},
{
  "userId": 1,
  "id": 5,
  "title": "eaque aut omnis a"
},
{
  "userId": 1,
  "id": 6,
  "title": "natus impedit quibusdam illo est"
},
{
  "userId": 1,
  "id": 7,
  "title": "quibusdam autem aliquid et et quia"
},
{
  "userId": 1,
  "id": 8,
  "title": "qui fuga est a eum"
},
{
  "userId": 1,
  "id": 9,
  "title": "saepe unde necessitatibus rem"
},
{
  "userId": 1,
  "id": 10,
  "title": "distinctio laborum qui"
}
]

// myMovies.forEach((obj) => {
//   console.log(obj.title)
// })

// const printMyName = obj => {
//   const nombres = obj.title
//   return nombres
// }

const printMyName = obj => obj.title


// const titles = myMovies.map(printMyName)
// console.log(titles)

const titles = myMovies.map(obj => obj.title)
console.log(titles)


// Filter from 1 to 5
const filtered = myMovies.filter((obj) => {
  const result = obj.id < 6
  return result
})

console.log(filtered)

const together = myMovies
  .filter(obj => obj.id > 5)

console.log(together)

const together2 = together.map(obj => obj.title)
console.log(together2)


// Sort() Method
// ------------------!

let people = [
  { name: "John", age: 30 },
  { name: "Mike", age: 25 },
  { name: "Sara", age: 35 },
  { name: "Wicho", age: 28 },
  { name: "Boris", age: 32 },
  { name: 'Cabrita', age: 39 }
]

const sortByAge = people.sort((a, b) => a.age - b.age)
console.log(sortByAge)

const sortByAgeReverse = people.sort((a, b) => b.age - a.age);
console.log(sortByAgeReverse)

const sortByName = people.sort((a, b) => {
  let nameA = a.name.toUpperCase()
  let nameB = b.name.toUpperCase()

  if (nameA < nameB) return -1
  if (nameA > nameB) return 1
  return 0
})
console.log(sortByName)