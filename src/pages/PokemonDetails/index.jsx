import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getPokemonDetails } from "../../services/PokeAPI/pokeAPI";
import { getPokemon3D } from "../../services/PokeAPI3D/api";
import style from './styles.module.css'
import "@google/model-viewer";

export const PokemonDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation()

    const pokemonState = location.state?.pokemon;

    const [pokemon, setPokemon] = useState(pokemonState || null)
    const [loading, setLoading] = useState(!pokemonState);
    const [pokemon3D, setPokemon3D] = useState(null);
    const [selectedForm, setSelectedForm] = useState("regular");


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

    return (
        <div className={style.cardStatusPokemonContainer} >


            <div className={style.pokemonCard}>

                <div className={style.voltarButtonContainer}>
                    <button className={style.voltarButton} onClick={() => navigate(-1)}>
                       🠸 Voltar
                    </button>
                </div>

                <div className={style.modelContainer}>



                    <div className={style.namePokemon}>
                        {pokemon.name}
                    </div>
                    {currentModel && (
                        <model-viewer
                            src={currentModel.model}
                            camera-controls
                            auto-rotate
                            shadow-intensity="1"
                            exposure="1"
                            style={{
                                width: "700px",
                                height: "500px"
                            }}
                        />
                    )}

                    <div className={style.formsContainer}>
                        {pokemon3D?.forms?.map((form) => (
                            <button className={style.formsButton}
                                key={form.formName}
                                onClick={() =>
                                    setSelectedForm(form.formName)
                                }
                            >
                                {form.formName}
                            </button>
                        ))}
                    </div>
                </div>
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
            </div>
        </div>
    )
}