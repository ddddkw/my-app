import { BrowserRouter ,Route,Routes} from "react-router-dom";
import './App.css';
import routes from './app/router/index';
import Head from './app/layout/head';
import Side from './app/layout/side';
function renderRoute(){
    let arr = [];
    routes.forEach((item,i)=>{
        if(item.children){
            item.children.forEach((citem,ci)=>{
                arr.push(<Route key={i+'-'+ci} path={item.path+'/'+citem.path} element={citem.element}></Route>);
            })
        }else{
            arr.push(<Route key={i} path={item.path} element={item.element}></Route>);
        }
    })
    return arr;
}


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className='app_head'><Head/></div>
                <div className='app_side'><Side/></div>
                <div className='app_main'>
                    <Routes>
                        { renderRoute() }
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}
export default App;
