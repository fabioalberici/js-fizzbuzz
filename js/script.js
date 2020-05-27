
for (var i = 1; i <= 100; i++) {
  var numero = i;
  // nel caso sia un multiplo sia di 3 che di 5 scrivo 'fizzbuzz'
  if ( i % 5 == 0 && i % 3 == 0) {
   numero = 'fizzbuzz';
  } else if ( i % 5 == 0) {
    // nel caso sia un numero multiplo di 5 scrivo 'buzz'
    numero = 'buzz';
  } else if ( i % 3 == 0) {
    // nel caso sia un numero multiplo di 3 scrivo 'fizz'
    numero = 'fizz';
  }
  console.log(numero);
}
