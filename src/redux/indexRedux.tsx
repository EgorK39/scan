import {combineReducers} from "redux";
import changeTariffs from "./Tariffs";
import changeUrls from "./MyUlrs";
import searchParameters from "./SearchParameters";

export default combineReducers({
    changeTariffs, changeUrls, searchParameters

})