// Constructor function for  objects
function Family(name, mother, father, spouse, children) {
    this.name = name;
    this.mother = mother;
    this.father = father;
    this.spouse = spouse;
    this.children = children;
    // changeSpouse function that changes constructor value of spouse to value of arg
    this.changeSpouse = function (spouse) {
        this.spouse = spouse;
    }
    /*
     Alternative to changeSpouse function above using an arrow functions
     this.changeSpouse = (changed) => this.spouse = changed;
    */
}

// Create a Family object
let ani = new Family('ani');
let tuulia = new Family('tuulia');
let sipho = new Family('sipho','tuulia',null,'Ani');
let aolani = new Family('aolani','ani','sipho');
let hiro = new Family('hiro','ani','sipho');
let xue = new Family('xue','ani','sipho');

console.log(sipho.mother);
// tuulia
ani.changeSpouse("mars");
console.log(ani.spouse);
// mars