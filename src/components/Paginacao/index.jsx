import React from "react";
import styles from './styles.module.css'

export const Paginacao = (props) => {
    
    const {page,totalPages,onLeftClick, onRightClick} = props;
    
     
    return (

        <div className= {styles.containerPages}> 
         
           <button className = {styles.button}onClick={onLeftClick}
           >◀</button>
           <div className={styles.txtPage}
           >
              {page} de {totalPages}
           </div>
           <button className = {styles.button} onClick={onRightClick}
           >▶</button>
        </div>
    )


}