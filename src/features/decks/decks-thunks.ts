import {AppDispatch} from "../../app/store.ts";
import {AddDeckParams, decksAPI} from "./decks-api.ts";
import {addDeckAC, setDecksAC} from "./decks-reducer.ts";

export const fetchDecksTC = () => (dispatch: AppDispatch) => {
    decksAPI.fetchDecks().then(res => {
        dispatch(setDecksAC(res.data.items))
    })
}
export const addDeckTC = (params: AddDeckParams) => async (dispatch: AppDispatch) => {
    return decksAPI.addDeck(params).then(res => {
        dispatch(addDeckAC(res.data))
    })
}