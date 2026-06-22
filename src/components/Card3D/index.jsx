import React from "react";
import style from './styles.module.css'

export const Card3D = ({ pokemon, currentModel, pokemon3D, setSelectedForm }) => {

    return <div>
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
                        width: "100%",
                        height: "400px"
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
}