import ActuatorManage from '../pages/actuatorManage';
import DispatchLogs from '../pages/dispatchLogs';
import TaskManage from '../pages/taskManage';
import Draggable from '../pages/draggable'
import Login from '../pages/login/login'

// 正常的路由写法——default路由写在此处，比如登陆页面，其余路由放在components中，展示的menu列表通过接口返回的菜单权限列表展示

const Routes = [
    {
        path: "/login",
        label:'登录页面',
        element: <Login/>,
    },
    {
        path: "/taskManage",
        label:'任务管理',
        element: <TaskManage/>,
    },
    {
        path: "/dispatchLogs",
        label:'调度日志',
        element: <DispatchLogs/>,
    },
    {
        path: "/ActuatorManage",
        label:'执行器管理',
        element: <ActuatorManage/>,
    },
    {
        path: "/Draggable",
        label:'可拖拽页面',
        element: <Draggable/>,
    },
];
export default Routes;

