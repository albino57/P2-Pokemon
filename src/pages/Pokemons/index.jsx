import { useState, useEffect } from "react";
import { Paginacao } from "../../components/Paginacao";
import { PokemonList } from "../../components/PokemonList";
import styles from './styles.module.css'
import { useSearchParams } from "react-router-dom";


export const Pokemons = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const page = Number(searchParams.get("page")) || 0;
    const [totalPage, setTotalPage] = useState(0);
    
  
    const onLeftClickHandle = () =>{
    
      if(page > 0){
         setSearchParams({ page: page - 1 });
      }
    }
    const onRightClickHandle = () =>{
         if(page + 1 < totalPage ){
          setSearchParams({ page: page + 1 });
         }
    }

    useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    }, [page]);
    
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