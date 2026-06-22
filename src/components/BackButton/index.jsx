import React from "react";
import style from './styles.module.css';
import { useNavigate } from "react-router";

export const BackButton = () => {
    const navigate = useNavigate();
    return (
        <div className={style.voltarButtonContainer}>
            <button className={style.voltarButton} onClick={() => navigate('/home')}>
                🠸 Voltar
            </button>
        </div>
    )
}