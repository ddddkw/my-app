import React from 'react';
import './head.css'
import { MenuFoldOutlined } from "@ant-design/icons";


class head extends React.Component {
    render() {
        return (
            <section>
                <div className='headStyle'>
                    <div className='headTitle'>Management Center</div>
                    <div className='headRight'>
                        <MenuFoldOutlined className='iconStyle'/>
                    </div>
                </div>
            </section>
        );
    }
}
export default head;
