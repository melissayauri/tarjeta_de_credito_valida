function isValidCard(cardNumber){
  var element;
  var suma= 0;
  // recorrido
  for(i =1 ; i < cardNumber.length; i = i+2){
    // elemento impar duplicado
		element[i] = element[i] * 2;
    // si es mayor a 10, suma sus propios elementos

    if(element[i] >= 10){
			element[i] = element[i] + element[i+1];
		}
	}
  // suma los elementos
	for(i = 0; i < cardNumber.length; i++){
		suma = suma + element[i];
	}
  // retorna si es valido la tarjeta
	return ((suma%10) === 0);
  }
  console.log(isValidCard(789));
