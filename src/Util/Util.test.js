import renderer from 'react-test-renderer';
import suma from './Suma';
import division from  './Division';
import multiplicacion from './Multiplicacion';
import ordenamiento from './Ordenamiento'

//Test Division

describe('Pruebas Unitarias para la funcion Division.', () => {
    it ('Dividir 2 numeros.', () => {
        expect(division(5, 2)).toBe(2.5)
    });

    it ('Verifica el tipo de dato ingresado como parametro en la funcion.', () => {
        expect(division(5, "@")).toBe('error - El tipo de dato debe ser number.')
    });

    it ('Verifica si falta algun parametro en la funcion.', () => {
        expect(division(8)).toBe('error - Debe ingresar todos los parametros.')
    });

    it ('Verifica si el resultado de la funcion es Par.', () => {
        let result_one = division(4, 2)
        if (result_one % 2 == 0) {
            result_one = 'es Par.'
        }
        expect(result_one).toBe('es Par.')
    }); 

    it ('Verifica si el resultado de la funcion es Impar.', () => {
        let result_two = division(3, 2)
        if (result_two % 2 != 0) {
            result_two = 'es Impar.'
        }
        expect(result_two).toBe('es Impar.')
    });
});

//Test Multiplicacion

describe('Pruebas Unitarias para la funcion Multiplicacion.', () => {
    it ('Multiplicar 3 numeros.', () => {
        expect(multiplicacion(5, 2, 4)).toBe(40)
    })
    
    it ('Verifica el tipo de dato ingresado como parametro en la funcion.', () => {
        expect(multiplicacion(5, 2, "@")).toBe('error - El tipo de dato debe ser number.')
    });

    it ('Verifica si falta algun parametro en la funcion.', () => {
        expect(multiplicacion(8, 9)).toBe('error - Debe ingresar todos los parametros.')
    });

    it ('Verifica si el resultado de la funcion es Par.', () => {
        let result_one = multiplicacion(2, 2, 2)
        if (result_one % 2 == 0) {
            result_one = 'es Par.'
        }
        expect(result_one).toBe('es Par.')
    }); 

    it ('Verifica si el resultado de la funcion es Impar.', () => {
        let result_one = multiplicacion(3, 3, 3)
        if (result_one % 2 != 0) {
            result_one = 'es Impar.'
        }
        expect(result_one).toBe('es Impar.')
    });

});

//Test Ordenamiento

describe('Pruebas Unitarias de Ordenamiento.', () => {

    it ('Verifica que la funcion ordene la array enviada como parametro.', () => {
        
        const lista_one = [7, 5, 9, 2, 6, 3, 8]
        const ordLista = [2, 3, 5, 6, 7, 8, 9]

        let result_one = ordenamiento(lista_one)
        expect(result_one).toEqual(ordLista)
    })
    
    it ('Verifica que la lista solo contenga numeros.', () => {
        
        const lista_two = [7, 5, 9, 7, 9, "3", 8]
        let result_two = ordenamiento(lista_two)
        expect(result_two).toBe('Datos Invalidos')
    })

    it ('Verifica si es una lista vacia', () => {
        const lista_three = ordenamiento([])
        expect(lista_three).toEqual([])
    })

    it ('Verifica que la lista tenga al menos 3 elementos.', () => {
        const lista_four = [[2, 5]]
        let result_four = ordenamiento(lista_four)
        if (result_four.length <  3) {
            result_four = 'El objeto lista tiene elementos insuficientes.'
        }
        expect(result_four).toBe('El objeto lista tiene elementos insuficientes.')
    })

    it ('Verifica que la lista tenga como maximo 7 elementos.', () => {
        const lista_five = [7, 5, 9, 2, 6, 3, 8, 9]
        let result_five = ordenamiento(lista_five)
        if (result_five.length >  7) {
            result_five = 'El objeto lista supera el maximo de elementos que puede contener.'
        }
        expect(result_five).toBe('El objeto lista supera el maximo de elementos que puede contener.')
    })


});