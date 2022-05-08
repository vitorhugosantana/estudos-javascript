function fazerRelatorio (texto)
{
    if (typeof texto !== 'string') 
    {
        console.log ('Oh carai')
        return undefined

    }
    
    
    var retorno = {palavra: texto, palavraInverso: '', numeroVogais: 0}
    retorno.palavraInverso = inverterString (texto)
    retorno.numeroVogais = contarNumeroVogais (texto)
    console.log (retorno)

}

function inverterString(texto)
{

    var meuArray = [...texto].reverse()
    console.log (meuArray)

    var stringInvertida = ''
    for(const letra of meuArray)
    {
      stringInvertida = stringInvertida + letra;
    
    }
    return stringInvertida;
}

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
    return contador;
}
fazerRelatorio ('Salve')
