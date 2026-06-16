
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getEnemyList } from '../../services/DndAPI'


export const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    function fillPokemonList() {
        getPokemonList().then((results)=>{
            setPokemonList(results.data.results);
        }).catch((e)=>{
            console.error(e);
        }).finally(()=>{
            setLoading(false);
        });
    }
    
    useEffect(() => {
        fillEnemyList();
    }, []);

    if(loading) {
        return <div>Loading...</div>
    }

    return (
           <div className= {style.pokemonList}>

           </div>

    )
}