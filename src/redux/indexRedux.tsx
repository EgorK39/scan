import {combineReducers} from "redux";
import changeTariffs from "./Tariffs";
import changeUrls from "./MyUlrs";

export default combineReducers({
    changeTariffs, changeUrls

})