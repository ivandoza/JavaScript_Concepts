const order = {
  customer: {
    address: {
      city:{}         // De esta manera se imprime 'true'
    }                 // Si quitamos la propiedad city imprimirá 'false' 'City is required'
  },
};


if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required');
}

console.log(Object.hasOwn(order.customer.address, 'city'))