let defaultOnwerData = { firstName: "jin", lastName: "minuk" };
export function defaultOwner() { return new Person(defaultOnwerData); }
export function setDefaultOwner(arg) { defaultOnwerData = arg; }

class Person {
  constructor(data) {
    this._lastName = data.lastName;
    this._firstName = data.firstName;
  }

  get lastName() { return this._lastName; }
  get firstName() { return this._firstName; }
}