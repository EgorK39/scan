import * as React from "react";
import "../../styles/SearchPage/PictureSearchPage.scss";

export default function PictureSearchPage() {
    return (
        <div className={'pictureSearchPage'}>
            <div>
                <img className={'pictureOne'} src={require('./images/Document.svg')}/>
                <img className={'pictureTwo'} src={require('./images/Folders.svg')}/>
            </div>
            <div>
                <img className={'pictureThree'} src={require('./images/Group 1171274244.svg')}/>
            </div>
        </div>
    )
}