import {combineReducers, legacy_createStore as createStore} from "redux";
import {maxClickerReducer} from "./MaxClickerReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";

const rootReducer = combineReducers({
    maxClicker: maxClickerReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

export const store = createStore(rootReducer)