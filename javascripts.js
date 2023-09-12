/* these are the different ways to define a function */
function greg(a,b) {
  return a + b
}
greg = function (a,b) {
  return a + b
}
add = (a, b) => {
  return a + b
}
add = (a, b) => a + b

// this is a function that takes no parameters and returns a string
let somethingdumb = () => "wow"
console.log("somethingdumb() 1:", somethingdumb())

// this is a function that doesn't do what we want
somethingdumb = () => { something: 33 }
console.log("somethingdumb() 2:", somethingdumb())

// this fixes it (returns an object)
somethingdumb = () => ({ something: 33 })
console.log("somethingdumb() 3:", somethingdumb())

// assigning a function to another variable name (from class q)
var richard = greg
console.log("assign fn:", richard(3,2))
// oh my, coercion at work
console.log("mmm coercion:", richard("3",2))

// an array
const derp = [1,2,3,4,5,6,7]
console.log("derp:", derp)
// map
console.log("derp mapped with greg:", derp.map(greg))

// what's going on there?
let paul = (value, index) => {
  console.log(`value${value} index: ${index}`)
  return value
}
console.log(paul("four", "someth"))
console.log(derp.map(paul))

// make it interesting?
paul = (value, index) => {
  console.log(`value: ${value} index: ${index}`)
  return value*3
}
console.log(derp.map(paul))

// imperative approach to do that same thing (sort of):
let newArr = [];
for(i = 0; i < derp.length; i++) {
  console.log(`value: ${derp[i]} index: ${i}`)
  newArr[i] = derp[i] * 3
}

// reduce example for add
// imperative version first:
let sum = 0
for(i = 0; i < derp.length; i++) {
  sum += derp[i]
}
// functional version using reduce
sum = derp.reduce((acc, val) => acc + val, 0)
let oops = derp.reduce((acc, val) => acc + val, "")
// wait, named function?
oops = derp.reduce(greg, "")
sum = derp.reduce(greg, 0)

// currying or partial application
let wtf = (number) => (another) => number * another
console.log(wtf(4))
let omfg = wtf(4)
console.log(omfg(2))

let doubleit = wtf(2)
let twix = derp.map(doubleit)
console.log(twix)

/*****
 * events and stuff
 */
let temp0 = document.querySelector("h1.question")
// overrides anything that might have been there before
temp0.onclick = () => alert("burp")

const llleel = () => console.log("elellelelle")
temp0.addEventListener("click", llleel)
temp0.addEventListener("click", (ev) => console.log(ev))

temp0.removeEventListener("click", llleel)
