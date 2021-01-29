

export const requiredFieldValidationForm = (value) => {
 if(value) return undefined
 return "Раз уж начал, то давай...пиши)!"
}

export const maxFieldLengthCreator = (maxLength) => (value) =>{
if( value.length > maxLength ){
    return `max ${maxLength} simbols`
}
return undefined
}
