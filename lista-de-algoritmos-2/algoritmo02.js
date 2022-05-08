function contarNumeroVogais (texto)
{

    var meuArray = [...texto]
    var contador = 0
    for(const letra of meuArray)
    {
        if (letra === 'a' || letra === 'A') {
            contador = contador + 1

        }
        else if(letra === 'e' || letra === 'E'){
            contador = contador + 1
        }
        else if(letra === 'i' || letra === 'I'){
            contador = contador + 1 
        }
        else if(letra === 'o' || letra === 'O'){
            contador = contador + 1
        }
        else if(letra === 'u' || letra === 'U'){
            contador = contador + 1
        
        }

    }
    console.log (contador);
}



contarNumeroVogais ('Salve')