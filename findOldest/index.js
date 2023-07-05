
function  findOldest(people) {
 const oldestPerson = people.reduce((oldest, current) => 
 {
    if (current.age > oldest.age) {
        return current
    } else {
        return oldest;
    }
 });

 return oldestPerson.name
}

const Mike = createPerson ("Mike", "Doe", 45);
const Vadim = createPerson ("Vadim", "Popov", 30);
const Alex = createPerson ("Alex", "Smith", 40);


const people = [Mike, Vadim, Alex];
console.log(findOldest(people));






