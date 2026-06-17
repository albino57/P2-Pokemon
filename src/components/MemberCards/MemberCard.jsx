function MemberCard({integrante}){

    return(
        <div className="member-card">
            <img 
                src={integrante.foto}
                alt={integrante.nome}
            />
            <h2>
                {integrante.nome}
            </h2>
            <div>
                <a href={integrante.linkedin} target="_blank">
                    LinkedIn
                </a>
                <a href={integrante.github} target="_blank">
                    GitHub
                </a>
            </div>
        </div>
    )
}

export default MemberCard;