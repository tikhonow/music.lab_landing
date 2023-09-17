import {FC} from "react";
import {Card, CardProps} from "../Card/Card.tsx";
import './CardList.scss'

export const CardList: FC<CardProps[]> = (cardList) => {

    console.log()

    return (
        <div className='cardList'>
            {Object.values(cardList).map((card, index) => {
                return (
                  <Card {...card} key={index.toString()} />
                )
            })}
        </div>
    )
}