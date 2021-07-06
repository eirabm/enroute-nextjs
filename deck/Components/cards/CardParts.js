import styles from '../cards/Cards.module.scss';

export const Corners = ({cornerPos, number, symbol}) => {
    return (  
        <div className={[styles['card-corner'], styles[cornerPos]].filter(Boolean).join(' ')}>
			<div>{number}</div>
			<div>{symbol}</div>
		</div>
    );
}

export const Symbols = ({number, symbol, isNumber}) => {
    return ( 
        <div className={styles.symbols}>
            {number === 'A' ? <div className={styles.Asymbol}>{symbol}</div> : ""}
            {isNumber ? new Array(parseInt(number))
                .fill(symbol).map((cardSymbol) => <div>{cardSymbol}</div>): ""}
            {number === 'J' || number === 'Q' || number === 'K' ? <div className={styles.image}></div>: ""}
        </div> 
)}

