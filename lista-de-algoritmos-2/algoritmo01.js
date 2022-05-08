function inverterString(texto)
{

    var meuArray = [...texto].reverse()
    console.log (meuArray)

    var stringInvertida = ''
    for(const letra of meuArray)
    {
      stringInvertida = stringInvertida + letra;
    
    }
    console.log (stringInvertida);
}

  inverterString ('Salve');
