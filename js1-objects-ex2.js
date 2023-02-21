function createAddress1(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }
}

function CreateAddress2(street, city, zipCode) {
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
}

const address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
}

const a = createAddress1(address.street, address.city, address.zipCode);

const b = new CreateAddress2(address.street, address.city, address.zipCode);
