import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li> <img src="./images/accueil.png" alt="" /> Menu Principal</li>
                </NavLink>

                <NavLink to="/product" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li> <img src="./images/produits.jpg" alt="" /> Produit</li>
                </NavLink>
                
                <NavLink to="/customers" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li> <img src="./images/client.jpg" alt="" /> Clients</li>
                </NavLink>
                
                <NavLink to="/providers" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li> <img src="./images/fournisseur.jpg" alt="" /> Fournisseurs</li>
                </NavLink>
                
                <NavLink to="/stock" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li> <img src="./images/stok.jpg" alt="" /> Stock</li>
                </NavLink>
                
                <NavLink to="/history" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li> <img src="./images/historique.jpg" alt="" /> Historique</li>
                </NavLink>

            </ul>

        </div>
    );
};

export default Navigation;