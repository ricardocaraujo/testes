let address1 = new address('a', 'b', 'c');
let address2 = new address('a', 'b', 'c');

function Address(street, city, zipCode) {
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
}

function areEqual(address1, address2) {
    
}

function areSame(address1, address2) {
    return address1 === address2;
}