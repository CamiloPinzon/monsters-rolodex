import React from 'react';
import 'components/card/card.styles.css';

interface Monster {
    monsterInfo: Object
}

const Card: React.FC<Monster> = (props: any) => {
    return (
        <div className='card-container'>
            <img src={`https://robohash.org/${props.monsterInfo.id}?set=set2&size=180x180`} alt={props.monsterInfo.name} />
            <h2> {props.monsterInfo.name} </h2>
            <p> {props.monsterInfo.email} </p>
        </div>
    )
}

export default Card;