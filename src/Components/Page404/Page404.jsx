import React, {useEffect} from 'react';
import style from "../Page404/Page404.module.scss";
import error from "../../assets/images/not_found_bg.png";
import bg from "../../assets/images/file_item_bg_white.png";
import PagePhoto from "../../assets/images/panda_404.gif";


export const Page404 = ({history}) => {

    useEffect(() => {
        setTimeout(() => history.push('/'), 10000);
    }, [history]);

    return (
        <div className={style.page}
             style={{
                 backgroundImage: `url(${bg})`,
                 backgroundPosition: 'center',
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat'
             }}>
            <img
                alt='img'
                src={PagePhoto}/>
            <div className={style.errorContent}
                 style={{
                     backgroundImage: `url(${error})`,
                     backgroundPosition: 'center',
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat'
                 }}
            >
            </div>
        </div>
    );
};
