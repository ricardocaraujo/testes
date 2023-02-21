const address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
}

function showAddress(address) {
    //console.log(`${address.street}, ${address.city}, ${address.zipCode}`)
    for(let key in address) {
        console.log(key, address[key]);
        //console.log(key); // utilizando let key of: erro - address não é iterável 
    }
}

showAddress(address);