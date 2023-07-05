function createPerson(name, surname, age) {
    return {
        name: name,
        surname: surname,
        age: age
    };   
}

const person = createPerson("Alina", "Polenok", 26)
console.log(person);