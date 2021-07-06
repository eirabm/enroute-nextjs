import { useState } from 'react';
import styles from '../cards/Cards.module.scss';
import { Corners, Symbols } from './CardParts';

const CardFactory = ({card}) => {
    const number = card.slice(0, -1)
    const symbol = card.slice(-1)

    const isNumber = !isNaN(number)

    const [flipped, setFlipped] = useState(false)

    return ( 
    <div className= {[styles.card, flipped ? styles.flipped : ''].filter(Boolean).join(' ')}
    number={number} 
    symbol={symbol}
    key={card}
    onClick={()=> setFlipped(!flipped)}>
        <div className={styles.container}>
        <div className={styles.front}>

            <Corners cornerPos="top-left" number={number} symbol={symbol} />

            <Symbols number={number} symbol={symbol} isNumber={isNumber} />
            
            <Corners cornerPos="bottom-right" number={number} symbol={symbol} />
        </div>

        <div className={styles.back}>

        </div>
        </div>
    </div>
    );
}

export default CardFactory;