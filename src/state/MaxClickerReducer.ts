export type MaxClickerType = {
    score: number
}

export const increaseScoreAC = () => ({
    type: "INCREASE-SCORE"
}) as const
export const setScoreAC = (score: number) => ({
    type: "SET-SCORE", score
}) as const

export type MaxClickerATs =
    ReturnType<typeof increaseScoreAC>
    | ReturnType<typeof setScoreAC>

const initialState: MaxClickerType = {
    score: 0
}

export const maxClickerReducer = (state: MaxClickerType = initialState, action: MaxClickerATs): MaxClickerType => {
    switch (action.type) {
        case "INCREASE-SCORE":
            return {...state, score: state.score + 1}
        case "SET-SCORE":
            return {...state, score: action.score}
        default:
            return state
    }
}