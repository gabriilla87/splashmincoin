import React, {useEffect, useState} from 'react';
import maxPicture from '../../assets/maxPicture.png'
import s from "./ClickerEntity.module.css"
import {useDispatch} from "react-redux";
import {increaseScoreAC, setScoreAC} from "../../state/MaxClickerReducer";
import {useAppSelector} from "../../state/store";

export const ClickerEntity = () => {
    const [isPressed, setIsPressed] = useState(false);

    const dispatch = useDispatch()
    const score = useAppSelector<number>(state => state.maxClicker.score)

    useEffect(() => {
        const score = localStorage.getItem("score")
        dispatch(setScoreAC(JSON.parse(score ? score : "1")))
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem("score", JSON.stringify(score))
    }, [score]);

    const handleMouseDown = () => {
        setIsPressed(true);
    };

    const handleMouseUp = () => {
        setIsPressed(false);
    };

    const onClickHandler = () => {
        dispatch(increaseScoreAC())
    }

    const imageStyle = {
        height: isPressed ? '90%' : '100%',
        transition: 'height 0.2s',
    };

    return (
        <div className={s.container}>
            <img style={imageStyle}
                 src={maxPicture}
                 alt={'Tap me'}
                 onMouseDown={handleMouseDown}
                 onMouseUp={handleMouseUp}
                 onClick={onClickHandler}
                 onTouchStart={handleMouseDown}
                 onTouchEnd={handleMouseUp}
            />
        </div>
    );
};