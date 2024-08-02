import React from 'react';
import Navigation from '../components/Navigation';

import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


const Home = () => {

   //******************************************LES USESTATES ET LES VARIABLES************************//

   const [prodData, setProdData] = useState([]);
   // const [histoData, setHistoData] = useState([]);

   const [selectedProd, setSelectedProd] = useState("");
   const [correspondPu, setCorrespondPu] = useState("");
   const [quantity, setQuantity] = useState("");
   const [amount, setAmount] = useState("");
   const [mouvement, setMouvement] = useState("");
   const [cliFour, setCliFour] = useState("");
   const [tel, setTel] = useState("");
   const [adress, setAdress] = useState("");

   // ************************************GESTION DES ERREURS*******************************//
   const [productError, setProductError] = useState(false);
   // const [puError, setPuError] = useState(false);
   const [quantityError, setQuantityError] = useState(false);
   const [amountError, setAmountError] = useState(false);
   // const [mouvementError, setMouvementError] = useState(false);
   const [cliFourError, setCliFourError] = useState(false);
   const [telError, setTelError] = useState(false);
   const [adressError, setAdressError] = useState(false);

   //*********************LES MESSAGES D'ERREUR*********************
   let productMessage = ("VOUS DEVEZ SELECTIONNER UN PRODUIT");
   let quantityMessage = ("VOUS N'AVEZ PAS DEFINI LA QUANTITE");
   let amountMessage = ("Veuillez Cliquer Sur Evaluer D'Abord")
   let cliFourMessage = ("Vous Devez Entrer Le Nom Du Client Ou Du Fournisseur");
   let telMessage = ("Vous Devez Entrer Un Numéro De Téléphone");
   let adressMessage = ("Vous Devez Saisir Une Adresse Valide")
   //******************************************LES FONCTIONS************************//

   // GENERATEUR DE NOMBRES ALEATOIRES:
   const aleaNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

   useEffect(() => {
      getData();
      // getHisto();
   }, [])

   // RECUPERATION DES PPRODUITS:
   const getData = () => {
      axios.get("produits.json")
         .then((res) => setProdData(res.data.produits))
   }

   // RECUPERATION DE L'HISTORIQUE:
   // const getHisto = () => {
   //    axios.get("historique.json")
   //    .then((res) => setHistoData(res.data.histo))
   // }

   // ENREGISTREMENT DE LA COMMANDE:
   const saveCommande = (e) => {
      e.preventDefault();

      if(selectedProd === ""){
         setProductError(true) 
      } else if(quantity === ""){
         setQuantityError(true)
      } else if(amount === ""){
         setAmountError(true)
      } else if(cliFour === ""){
         setCliFourError(true)
      } else if(tel === ""){
         setTelError(true)
      } else if(adress === ""){
         setAdressError(true)
      }

      else{
         axios.post("http://localhost:3004/histo",{
         date: Date.now(),
         mouvement: mouvement,
         numbCommande: aleaNumber(1000, 10000),
         fourClient: cliFour,
         telephone: tel,
         adress: adress,
         produit: selectedProd,
         quantite: quantity,
         prixUnit: correspondPu,
         total: amount,
      })
      .then(() => {
         setProductError(false);
      })
   }
      }


   return (
      <div className="all-home">

         <Navigation />

         <div className="main-home">

            <div className="list-produits">
               <ul>
                  {prodData.map((prod) => (
                     <button key={prod.id} onClick={(e) => setSelectedProd(e.target.innerText)
                        < setCorrespondPu(prod.prixUnitaire) < setProductError(false)}>
                        <img src={prod.image} alt="" height="30px" />{prod.designation}</button>
                  ))}
               </ul>

            </div>

            <div className="formulaire">
               <form onSubmit={(e) => saveCommande(e)}>

                  <div className="block1">
                     <label htmlFor="produit-name">PRODUIT</label>
                     <input id="produit-name" type="text" readOnly value={selectedProd}
                     style={{border: productError ? "solid red 2px" : ""}} /> <br />
                     <br />

                     <label htmlFor="pu">PU</label>
                     <input id="pu" type="number" readOnly value={correspondPu}/> <br />
                     <br />

                     <label htmlFor="qt">Qté</label>
                     <input id="qt" type="number" min="1" onChange={(e) => setQuantity(e.target.value) < setQuantityError(false)}
                     style={{border: quantityError ? "solid red 2px" : ""}} /><br />
                     <br />

                     <h4 id="evaluer" style={{backgroundColor: amountError ? "green" : ""}} onClick={() => setAmount(correspondPu * quantity)
                     < setAmountError(false)}>Evaluer</h4> <br />
                     <br />

                     <label htmlFor="amount">MONTANT</label>
                     <input id="amount" type="number" readOnly value={amount} />
                  </div>

                  <div className="block2">
                     <label htmlFor="mouv">Mouvement</label>
                     <select id="mouv" onClick={(e) => setMouvement(e.target.value)}>
                        <option value="vide">Définir Opération</option>
                        <option value="sortie">Sortie</option>
                        <option value="entrée">Entrée</option>
                     </select> <br />
                     {/* <input id="mouv" type="text"></input> <br /> */}
                     <br />

                     <label htmlFor="name">Nom(Client/Fourn.)</label>
                     <input id="name" type="text" style={{border: cliFourError ? "solid red 2px" : ""}}
                      onChange={(e) => setCliFour(e.target.value) > setCliFourError(false)} /> <br />
                     <br />

                     <label htmlFor="tel">Tél</label>
                     <input id="tel" type="text" style={{border: telError ? "solid 2px red" : ""}} onChange={(e) => setTel(e.target.value) > setTelError(false)} /> <br />
                     <br />

                     <label htmlFor="adress">Adress</label>
                     <input id="adress" type="text" style={{border: adressError ? "solid red 2px" : ""}} onChange={(e) => setAdress(e.target.value) > setAdressError(false)} />
                  </div>

                  <div className="block3">
                     
                     <h3>Alerte</h3>
                     
                     <textarea value={productError ? productMessage : ""
                  < quantityError ? quantityMessage : "" 
                  < amountError ? amountMessage : ""
                  < cliFourError ? cliFourMessage : ""
                  < adressError ? adressMessage : ""
                  < telError ? telMessage : ""}
                  style={{backgroundColor: productError || quantityError || amountError
                     || cliFourError || telError || adressError ? "red" : ""}}
                    />
                  
                  </div>
                  
                  <input id="save" type="submit" value="Enregistrer"></input>
               </form>
            </div>


         </div>




      </div>
   );
};

export default Home;