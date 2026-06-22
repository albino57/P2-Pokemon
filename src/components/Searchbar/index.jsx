import { useState } from "react";
import style from "./styles.module.css";
import { getPokemonDetails } from "../../services/PokeAPI/pokeAPI";
import { usePokedex } from "../../contexts/PokedexContext";

export const Searchbar = () => {
    const [search, setSearch] = useState("");

    const { setPokeSearch } = usePokedex();

    const onChangeHandle = (e) => {
        const value = e.target.value;

        setSearch(value);

        if (value === "") {
            setPokeSearch(null);
        }
    };

    const onButtonClickHandle = (e) => {
        e.preventDefault();

        if (search.trim() !== "") {
            onSearchHandle(search.toLowerCase().trim());
        }
    };

    const onSearchHandle = async (pokemon) => {
        try {
            const results = await getPokemonDetails(pokemon);

            setPokeSearch(results.data);

        } catch (err) {

            setPokeSearch(null);

            alert(`O Pokémon "${pokemon}" não foi encontrado na Pokédex.`);
        }
    };

    return (
        <div>
            <div className={style.searchBar}>
                <input
                    className={style.searchinput}
                    placeholder="Buscar Pokémon"
                    type="search"
                    value={search}
                    onChange={onChangeHandle}
                />

                <button
                    className={style.pokeButton}
                    onClick={onButtonClickHandle}
                >
                    <img
                        className={style.pokeButtonImg}
                        src="src/assets/Pokebola-pokeball-png-0.png"
                        alt="pokeButton"
                    />
                </button>
            </div>
        </div>
    );
};