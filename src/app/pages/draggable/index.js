import React from 'react';
import Draggable from 'react-draggable'

class draggable extends React.Component {
    render() {
        return (
            //  bounds='parent'限制只能在父组件范围内拖拽 每一个可拖拽的页面都需要使用Draggable标签包裹
            <div>
                <Draggable bounds='parent'>
                     <div>可拖拽页面1</div>
                </Draggable>
                <Draggable bounds='parent'>
                    <div>可拖拽页面2</div>
                </Draggable>
            </div>

        );
    }
}
export default draggable;
