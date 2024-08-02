import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import HistoryDisp from '../components/HistoryDisp';
import Navigation from '../components/Navigation';


const History = () => {

    const [historique, setHistorique] = useState([]);

    useEffect(() => {
        displayHisto()
    }, [])

    const displayHisto = () => {
        axios.get("http://localhost:3004/histo")
            .then((res) => setHistorique(res.data))
    }

    return (
        <div className="all-history">

            <Navigation />

            <div className="main-history">

                <div className="titles">
                    {/* <div className="date">
                        <h5>DATE</h5>
                    </div>

                    <div className="mouvement">
                        <h5>Opération</h5>
                    </div>

                    <div className="num-com">
                        <h5>NumCom</h5>
                    </div>

                    <div className="four-cli">
                        <h5>Four/Cli</h5>
                    </div>

                    <div className="telephone">
                        <h5>Téléphone</h5>
                    </div>
                    
                    <div className="adress">
                        <h5>Adress</h5>
                    </div>

                    <div className="produit">
                        <h5>Produuit</h5>
                    </div>

                    <div className="montant">
                        <h5>Montant</h5>
                    </div> */}
                
                </div>



                {historique
                    .map((histo) => (
                        <ul>
                            <HistoryDisp histo={histo} key={histo.id} />
                        </ul>

                    )
                    )}

            </div>

        </div>
    );
};

export default History;