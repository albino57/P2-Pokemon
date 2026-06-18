import { useState } from "react";
import { Paginacao } from "../../components/Paginacao";
import { PokemonList } from "../../components/PokemonList";
import styles from './styles.module.css'


export const Pokemons = () => {

    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    
    

    const onLeftClickHandle = () =>{
    
      if(page > 0){
         setPage (page -1);
      }
    }
    const onRightClickHandle = () =>{
         if(page + 1 < totalPage ){
          setPage(page + 1);
         }
    }
    
    return (
      <div>
        <PokemonList
            page={page} 
            setTotalPage = {setTotalPage}
            />
           <Paginacao
           page = {page+1}
           totalPages = {totalPage}
           onLeftClick={onLeftClickHandle}
           onRightClick={onRightClickHandle}
        />
       
     
      </div>
    )
}