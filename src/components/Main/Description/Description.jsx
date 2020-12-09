import React from 'react'
import el from './Description.module.css'



const Description =() => {
return(<>
     <div className={el.main}>
    <header> <img src='https://interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg'></img></header>  
    <div className={el.description}>
        info + description
        </div>
</div>
</>
)


}




export default Description