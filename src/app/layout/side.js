import React from 'react';
import Routes from '../router/index';
import { Menu } from 'antd';
import { useNavigate } from "react-router-dom";
let menus = [];
Routes.forEach((item,index)=>{
    let obj = {
        key:index,
        label:item.label,
    }
    if(item.children){
        item.children.forEach((citem,i)=>{
            citem.key=index+'-'+i;
        });
        obj.children = item.children
    }
    menus.push(obj);
});
export default function Side() {
    const navigate = useNavigate();
    function goPath(e){
        let keys = e.key.split('-');
        let route,cRoute;
        route = Routes[keys[0]];
        if(route.children){
            cRoute = route.children[keys[1]];
        }
        let path = route.path + (cRoute?'/'+cRoute.path:'');
        navigate(path);
    }
    return <div>
        <Menu
            defaultSelectedKeys={['0']}
            defaultOpenKeys={['1']}
            mode="inline"
            theme="dark"
            items={menus}
            onClick={goPath}
        />
    </div>;
}
