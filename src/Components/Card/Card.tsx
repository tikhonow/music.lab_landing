import React, {FC} from "react";
import './Card.scss'

export interface CardProps {
    title: string;
    description: string;
    backgroundImage: string;
    backgroundImageProps?: string;
    backgroundColor: string;
    linearGradient?: string;
    boxShadow?: string;
    backgroundButtonImage?: string;
    textColor?: string
}

export const Card: FC<CardProps> = (cardProps) => {

    const onMouseOver = (event: React.MouseEvent<HTMLDivElement>) => {
        const cardEl: HTMLDivElement = event.currentTarget;
        const liner = cardEl.children[0] as HTMLDivElement; // Type casting here

        if (cardProps.backgroundButtonImage) {
            liner.style.background = `url(${cardProps.backgroundButtonImage})`;
        } else {
            liner.style.background = `${cardProps.linearGradient}`;
            liner.style.boxShadow = `${cardProps.boxShadow}`;
        }
        cardEl.style.transform = `translate3d(0, -1rem, 0)`;
    };

    const onMouseOut = (event: React.MouseEvent<HTMLDivElement>) => {
        const cardEl: HTMLDivElement = event.currentTarget;
        const liner = cardEl.children[0] as HTMLDivElement; // Type casting here

        liner.style.background = `${cardProps.backgroundColor}`;
        liner.style.boxShadow = `none`;
        cardEl.style.transform = `none`;
    };

    return (
        <div onMouseOver={onMouseOver} onMouseOut={onMouseOut} className='card' style={{
            backgroundImage: `url(${cardProps?.backgroundImage})`,
        }}>
            <div className='liner' style={{
                background: `${cardProps.backgroundColor}`,
            }}>
                <h1 className='title' style={{color: `${cardProps.textColor}`}}>{cardProps?.title}</h1>
                <div className='description' style={{color: `${cardProps.textColor}`}}>{cardProps?.description}</div>
            </div>
        </div>
        );
};
