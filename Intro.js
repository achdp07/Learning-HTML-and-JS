let dname = 'diop'
let age = 23
let isStudent = true
let adress = {
    city:'LA',
    country: 'USA'
}
let hobbies = ['reading', 'leading', "solving problems"]

/*console.log(dname, age, isStudent, adress, hobbies)
let undefinedVariable
let nullVariable = null
age, isStudent, adress, hobbies, undefinedVariable, nullVariable*/

console.log(`dname: ${dname} (${typeof dname})`,
    `age: ${age} (${typeof age})`,
    `isStudent: ${isStudent} (${typeof isStudent})`,
    `adress: ${JSON.stringify(adress)} ${typeof adress}`,
    `hobbies: ${hobbies} ${typeof hobbies}`
)
    
    