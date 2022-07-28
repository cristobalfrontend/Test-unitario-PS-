
const ordenamiento = (lista) => {

    let ordenado = false

    for (let i=0; i<=lista.length-1; i++){
        if (typeof(lista[i]) == 'string') {
            return 'Datos Invalidos'
        }
    }

    while (!ordenado) {

        ordenado = true;

        for (let index = 0; index < lista.length; index++) {
    
            if (lista[index] > lista[index + 1]) {
                let aux = lista[index + 1]
                lista[index + 1] = lista[index]
                lista[index] = aux
                ordenado = false

            }
        }
    }

    return lista
    
};

export default ordenamiento;