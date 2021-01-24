import React from 'react';
import style from './Preloader.module.scss';
import {Spin} from "antd";
import {LoadingOutlined} from '@ant-design/icons';


const Preloader = () => {

    return (
        <div className={style.preloader}>
            <Spin className={style.tip}
                  tip="Loading..."
                  indicator={<LoadingOutlined
                      className={`${style.spinner} ${style.spinnerBig}`}
                      spin/>}
            />
        </div>
    )
};

export default Preloader;
