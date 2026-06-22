import { useState, useEffect, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import style from './styles.module.css';
import { BannerLayout } from "../components/BannerLayout";
import { NavBar } from "../components/NavBar";
import { FooterLayout } from "../components/FooterLayout";

export const DefaultLayout = () => {
  return (
    <div className={style.layoutContainer}>
     
      <BannerLayout/>
      <NavBar/>
      
      <div className={style.mainContainer}>
        <main className={style.main}>
          <div className={style.divOutlet}>
            <Outlet />
          </div>
        </main>
      </div>

      <FooterLayout/>
    </div>
  );
};