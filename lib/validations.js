'use strict'

class Validation {

    validateQuery (query) {
        if(!query){
            throw new Exception('Must define a query search.');
        }
    }

    validateTypesArray (types) {
        if(!types || !(types instanceof Array) || types.length === 0){
            throw new Exception('Must define an array with one or more types.');
        }
    }

}

module.exports = new Validation(); 