import {combineReducers} from "redux";
import changeTariffs from "./Tariffs";
import changeUrls from "./MyUlrs";
import searchParameters from "./SearchParameters";
import loginData from "./Login";
import setUserLogin from "./setUserLogin";

export default combineReducers({
    changeTariffs, changeUrls, searchParameters, loginData, setUserLogin

})