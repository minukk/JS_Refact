class Book {
  addReservation(customer) {
    this._reservations.push(customer);
  }
}

class BookRefact {
  addReservation(customer) {
    this.zz_addReservation(customer, false);
  }

  zz_addReservation(customer, isPriority) {
    assert(isPriority === true || isPriority === false);
    this._reservations.push(customer);
  }
}