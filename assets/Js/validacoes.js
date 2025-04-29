function mascaraTelfone(input){
    let telefoneDigitado = input.value.replace(/\D/g, '');
    if(telefoneDigitado.length === 11){
        telefoneDigitado = telefoneDigitado.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        input.value = telefoneDigitado;
    }
}


