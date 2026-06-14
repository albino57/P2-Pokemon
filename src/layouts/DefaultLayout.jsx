import { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router";
import style from './styles.module.css';

export const DefaultLayout = () => {
  return (
    <div className={style.layoutContainer}>
      <div className={style.carousel}>
        koee
      </div>
      <div className={style.mainContainer}>
        <div className={style.lateralBar}>
         </div>
        <main className= {style.main}>
          <div className={style.divOutlet}>
            <Outlet />
          </div>
          <footer>
            <p>Rodapé Temporario</p>
          </footer>
        </main>
      </div>
    </div>
  );
};