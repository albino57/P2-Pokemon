import React from 'react'
import './Contato.css'
import MemberCard from "../../components/MemberCards/MemberCard";
import fotoSilva from "../../assets/foto-silva.jpg"
import fotoBnVitor from "../../assets/foto-bnvitor.png"
import fotoMario from "../../assets/foto-mario.jpeg"
import fotoMarcos from "../../assets/foto-marcos.jpeg"


function Contato (){
    const integrantes = [
    {
        nome: "Breno",
        foto: "/foto-breno.png",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
    },

    {
        nome: "Bruno da Silva",
        foto: fotoSilva,
        linkedin: "https://www.linkedin.com/in/bruno-freitas-709ba23a4",
        github: "https://github.com/Brun0Fr3itas"
    },

    {
        nome: "Bruno Vitor",
        foto: fotoBnVitor,
        linkedin: "www.linkedin.com/in/bruno-vitor-25b4ab393",
        github: "https://github.com/brunovitor-git05"
    },

    {
        nome: "Marcos Paulo",
        foto: fotoMarcos,
        linkedin: "https://www.linkedin.com/in/marcos-paulo-mello-6b87ab375/",
        github: "https://github.com/marcospmelloo"
    },

    {
        nome: "Mário",
        foto: fotoMario,
        linkedin: "https://www.linkedin.com/in/mjpraun/",
        github: "https://github.com/MJPraun"
    },

    {
        nome: "Paulo",
        foto: "/foto-paulo.png",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
    },

    {
        nome: "Rafael",
        foto: "/foto-rafael.png",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
    }
]

    return(
        <div className="contato">
            <h1>Nossos Treinadores Pokémon</h1>
            <div className="cards-integrantes">
                {
                    integrantes.map((integrante)=>(
                    <MemberCard 
                        key={integrante.nome}
                        integrante={integrante}
                    />
                    ))
                }
            </div>
        </div>
)
}

export default Contato;