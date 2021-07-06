import  {React, useState, useEffect } from 'react';
import CardFactory from '../cards/Cards';

const Table = ({className, flipped}) => {

    const [deck, setDeck] = useState(null)
    const [hands, setHands] = useState(null)
    const [table, setTable] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/api/cards')
        .then((res) => res.json())
        .then((data) => {
            setDeck(data.deck)
            setHands(data.hands)
            setTable(data.table)
        })
    }, [setDeck, setHands, setTable] )

    return (
        <div>
            <h1>Card game</h1>

            <h2> Deck</h2>
            <div className="all">
                {deck && deck.map((card) => <CardFactory card={card}/>)
                }
            </div>

            <h2>Table</h2>
            <div className="deck widow">
                {table && table.map((card) => <CardFactory card={card}/>
                )}
            </div>

            <h2>Hand</h2>
            <div className="deck hand"></div>
                {hands && hands.map((hand) => (
                    hand.map((card) => <CardFactory card={card}/>)
                ))}
        </div>

    );
}

export default Table;