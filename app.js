// Question 1
function parent(abc){
    return function child(def){
        console.log(abc+def)
    }
}
let parentfunction = parent(34)
parentfunction(5)
// Question 2
let fruits = ["Apple","Mango","Banana","Orange","Peach","WaterMallon"]
function search(fruits,value){
    if (fruits.length === 0) {
        return false;
      }
    if(fruits[0]===value){
        return true
    }
    return search(fruits.slice(1),value)
 
}
console.log(search(fruits,"Mango"))
console.log(search(fruits,"Cheeku"))

// Question 3
function newParaAdd(text){
 let newpara = document.getElementById("new-para")
 newpara.textContent = text
}
newParaAdd("Lorem ipsum doller")

// Question 4

function createOrderedList(items){
    const ol = document.createElement('ol');
    for(let i = 0; i < items.length; i++){
        const li = document.createElement('li')
        li.textContent = items[i]
        ol.appendChild(li)

    }
    return ol;
}
let items=["osama","Ahmed","Muhaamed","Mustafa"]

const orderlist = createOrderedList(items)

document.body.appendChild(orderlist)
// Question 5
function changeColor(htmlElement,reference){
    const element = document.querySelector(htmlElement);

    if(element){
        element.style.backgroundColor = reference
    }
}
// Question 6

function saveobject(key,object){
    let stringify = JSON.stringify(object)
    localStorage.setItem(key,stringify)
}
let person = {
    name:'Osama',
    lastname:'Abdul Hafeez',
    age:18
}
saveobject("person",person)
// Question 7
// let preemployee  = localStorage.getItem("persons")
// let employees = preemployee ? JSON.parse(preemployee):[];
// function addstudent(){
// let employee1 = {
//     name : prompt("Enter Your Name"),
//     cnic: +prompt("Enter Your CNIC"),
//     age: +prompt("Enter Age"),
//     education:+prompt("Enter Your Education")
//     }
//     employees.push(employee1)
//     let stringify = JSON.stringify(employees)
//     localStorage.setItem("persons",stringify)
// }
// addstudent()

// Question 8

function saveObj(){
    let object = {
        name1:"Washing Machine",
        work:"Clothing Wash",
        price:18000,
        waranty:"5year"
    }
    localStorage.setItem("name",object.name1)
    localStorage.setItem("work",object.work)
    localStorage.setItem("price",object.price)
    localStorage.setItem("waranty",object.waranty)
    localStorage.getItem("name")
    
}

saveObj()