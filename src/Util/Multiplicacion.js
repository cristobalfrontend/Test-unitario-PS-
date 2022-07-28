const multiplicacion = (a, b, c) => {

    if (typeof(a) == 'string' || typeof(b) == 'string' || typeof(c) == 'string')  {
        return 'error - El tipo de dato debe ser number.'
    }
        
    else if (isNaN(a) == true || isNaN(b) == true || isNaN(c) == true) {
        return 'error - Debe ingresar todos los parametros.'
    }
        
    else {
        return a * b * c
    }
};

export default multiplicacion