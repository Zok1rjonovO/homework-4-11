class about {
  constructor(who , job , salary) {
    (this._who = who) , (this._job= job) , (this._salary = salary);
  }

  sayName = function () {
    console.log("Name: " + this._who);
  };
}

let FirstName = new about("David Bombal", "Developer", "2000$");

FirstName.salary = function () {
  console.log(this._salary);
};
FirstName.salary();

let Ronaldo = new about("Ronaldo", "fubollist", "33550062 миллиона GBP");

let Alixonov = new about("Alixonov Timur", "Bloger", "1500$");

let Olimjon = new about("Olimjon", "Developer", "2000$");

FirstName.sayName();

console.log(FirstName);
console.log(Ronaldo);
console.log(Alixonov);
console.log(Olimjon);