import React from 'react';

const HistoryDisp = ({ histo }) => {

    // FONCTION DE FORMATAGE DATE:
    const dateParser = (chaine) => {
        let newDate = new Date(chaine).toLocaleDateString("FR-fr",{
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
        })
        return newDate;
    }

    // // FONCTION DE FORMATAGE DE CHIFFRE:
    const numberFormat = (nombre) => {
        return nombre.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    }


    return (
        <div className="display-histo">
            
            <div style={{color: "blue"}} className="date">
                <h5>Date: {dateParser(histo.date)}</h5>
            </div>

            <div style={{color:"tomato"}} className="mouvement">
                <h5>Opération: {histo.mouvement}</h5>
            </div>
            
            <div style={{color:"crimson"}} className="num-com">
                <h5>Num-Com: {histo.numbCommande}</h5>
            </div>
            
            <div className="four-cli">
                <h5>{histo.fourClient}</h5>
            </div>
            
            <div className="telephone">
                <h5>{numberFormat(histo.telephone)}</h5>
            </div>
            
            <div className="adress">
                <h5>{histo.adress}</h5>
            </div>
            
            <div className="produit">
                <h5>{histo.produit} ({histo.quantite})</h5>
            </div>
            
            <div className="montant">
                <h5>{numberFormat(histo.total)} FR</h5>
            </div>

        </div>
        );
};

export default HistoryDisp;