
export type RequiredType = (value:string)=> string | undefined

export const requiredFieldValidationForm:RequiredType = (value) => {
 if(value) return undefined
 return "Раз уж начал, то давай...пиши)!"
}

export const maxFieldLengthCreator = (maxLength: number):RequiredType => (value) =>{
if( value.length > maxLength ){
    return `max ${maxLength} simbols`
}
return undefined
}
