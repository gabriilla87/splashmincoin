import React from 'react';
import {useAppSelector} from "../../state/store";

export const ScoreDisplay = () => {
    const score = useAppSelector<number>(state => state.maxClicker.score)

    const displayStyles = {
        marginTop: "50px",
        width: "100%",
        color: "white",
        fontSize: "80px",
        fontWeight: "bold",
    }

    return (
        <div style={displayStyles}>
            {score}
        </div>
    );
};