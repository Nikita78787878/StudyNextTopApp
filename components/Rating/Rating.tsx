import {RatingProps} from "./Rating.props";
import {JSX, useEffect, useState, KeyboardEvent} from "react";
import StarIcon from './star.svg'
import styles from './Rating.module.css'
import cn from "classnames";

export const Rating = ({ isEditable = false, rating, setRating, children, ...props }: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating)
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable
                    } )}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClick(i + 1)}>

                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGSVGElement>) => isEditable && handleSpace(i + 1, e)}
                    />
                </span>

            );
        });
        setRatingArray(updatedArray);
    };

    const changeDisplay = (i: number) => {
        if(!isEditable) {
            return;
        }
        constructRating(i);
    }

    const onClick = (i: number) => {
        if(!isEditable || !setRating) {
            return;
        }
        setRating(i);
    }

    const handleSpace = (i: number, e: KeyboardEvent<SVGSVGElement>) => {
        if(e.code != 'Space' || !setRating){
            return;
        }
        setRating(i);
    }

    return (

        <div {...props}>
            {ratingArray.map((r: JSX.Element, i: number) => (<span key={i}>{r}</span>))}
        </div>
    );
};

