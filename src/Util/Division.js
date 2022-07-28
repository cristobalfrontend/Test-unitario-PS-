
const division = (a, b) => {
    if (typeof(a) == 'string' || typeof(b) == 'string')  {
        return 'error - El tipo de dato debe ser number.'
    }
        
    else if (isNaN(a) == true || isNaN(b) == true) {
        return 'error - Debe ingresar todos los parametros.'
    }
        
    else {
        return a / b
    }
};

export default division