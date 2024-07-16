import ActuatorManage from '../pages/actuatorManage';
import DispatchLogs from '../pages/dispatchLogs';
import TaskManage from '../pages/taskManage';

const Routes = [
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
];
export default Routes;

