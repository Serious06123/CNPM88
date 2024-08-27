import { INIT_STATE } from "../../initState"
export default function hisMyBook(state = INIT_STATE.his, action) {
    switch (action.type) {
        case 'hisBookRequest':

            return {
                ...state
            }
        case 'hisBookSuccess':

            return {

                ...state,
                Data: action.payload

            }
        case 'hisBookFail':

            return {
                ...state,

            }

        default:
            return state;
    }

}