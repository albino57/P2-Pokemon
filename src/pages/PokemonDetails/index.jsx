import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getPokemonDetails } from "../../services/PokeAPI/pokeAPI";
import { getPokemon3D } from "../../services/PokeAPI3D/api";
import style from './styles.module.css'
import "@google/model-viewer";
import { PokedexContext } from "../../contexts/PokedexContext";
import { BackButton } from "../../components/BackButton";
import { Card3D } from "../../components/Card3D";

export const PokemonDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation()

    const pokemonState = location.state?.pokemon;

    const [pokemon, setPokemon] = useState(pokemonState || null)
    const [loading, setLoading] = useState(!pokemonState);
    const [pokemon3D, setPokemon3D] = useState(null);
    const [selectedForm, setSelectedForm] = useState("regular");

    const { pokedex, addPokemon, dropPokemon } = useContext(PokedexContext);
    const isCaptured = pokedex.some((item) => item?.id === pokemon?.id);
    const [status, setStatus] = useState('idle');


    async function loadCardPokemon() {
        try {
            const [pokemonResponse, modelResponse] =
                await Promise.all([
                    getPokemonDetails(id),
                    getPokemon3D()
                ]);

            setPokemon(pokemonResponse.data);

            const model = modelResponse.data.find(
                item => item.id === Number(id)
            );

            console.log("Modelo encontrado:", model);

            setPokemon3D(model);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {

        if (!pokemonState) {
            loadCardPokemon();
        } else {

            getPokemon3D()
                .then((response) => {

                    const model =
                        response.data.find(
                            item =>
                                item.id === Number(id)
                        );

                    setPokemon3D(model);
                })
                .catch(console.error)
                .finally(() =>
                    setLoading(false)
                );
        }

    }, [id]);

    if (loading) {
        return <h2>Carregando...</h2>
    }
    if (!pokemon) {
        return <h2>Pokémon não encontrado</h2>
    }

    let imagemPokemon =
        pokemon.sprites.versions["generation-v"]
        ["black-white"].animated.front_default;

    if (!imagemPokemon) {
        imagemPokemon = `https://play.pokemonshowdown.com/sprites/ani/${pokemon.name}.gif`;
    }

    const currentModel =
        pokemon3D?.forms?.find(
            form =>
                form.formName === selectedForm
        );



    function handleCapturar() {
        setStatus('capturando');

        setTimeout(() => {
            addPokemon(pokemon);
            setStatus('capturado');
        }, 1500);

        setTimeout(() => {
            setStatus('idle');
        }, 3000);
    }

    function handleSoltar() {
        dropPokemon(pokemon.id);
    }

    return (
       <div className={style.cardStatusPokemonContainer} >

            <div className={style.pokemonCard}>
                <BackButton />
                <Card3D
                    pokemon={pokemon}
                    currentModel={currentModel}
                    pokemon3D={pokemon3D}
                    setSelectedForm={setSelectedForm}
                />
            </div>

           
            <div className={style.typesStatus}>
                
                <p className={style.idPokemon}>
                    ID: #{pokemon.id}
                </p>
                
                <h3 className={style.txtTypes}>Tipos:</h3>
                <div className={style.types}>
                    {pokemon.types.map((info) => (
                        <div key={info.type.name} className={style.typePoke}>
                            {info.type.name}
                        </div>
                    ))}
                </div>
                
                <div className={style.stats}>
                    <h3 className={style.statsTitulo}>Status Pokemon:</h3>
                    <div className={style.typeNameContainer}>
                        {pokemon.stats.map((statInfo) => (
                            <div className={style.typeName} key={statInfo.stat.name}>
                                <strong>{statInfo.stat.name}:</strong> {statInfo.base_stat}
                            </div>
                        ))}
                    </div>
                </div>
                
                <div style={{ marginTop: '20px' }}>
                    {status == 'idle' && (
                        <button className={style.captureBttn} onClick={(e) => {
                            e.stopPropagation();
                            isCaptured ? handleSoltar() : handleCapturar()
                        }}>
                            {isCaptured ? "Soltar" : "Capturar"}
                        </button>
                    )}
                    {status === 'capturando' && <div className={style.captureBttnStatus}>Capturando...</div>}
                    {status === 'capturado' && <div className={style.captureBttnStatus}>Capturado!</div>}
                </div>

            </div> 

        </div>
      

    )
}