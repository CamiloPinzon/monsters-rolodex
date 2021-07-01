import React from 'react';
import Card from 'components/card/card.component';
import 'components/card-list/card-list.styles.css';

interface MonstersProps {
    monsters?: Array<{
        id: React.Key,
        name: string
    }>;
}

const CardList: React.FC<MonstersProps> = (props:any) => {
    return (
        <div className='card-list'>
            {props.monsters.map((monster: { id: React.Key; name: string; }) => (
                <Card key={monster.id} monsterInfo={monster}/>
            ))}
        </div>
    )
}

export default CardList;