import React from 'react';
import {Space, Table, Button} from 'antd';
import './index.css'

const columns = [
    {
        title: '任务ID',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '任务描述',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '调度类型',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '运行模式',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '负责人',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '状态',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '操作',
        dataIndex: 'address',
        key: 'address',
        render: (_, record) => (
            // record是当前行的数据
            <Space size="middle">
                <Button>操作</Button>
            </Space>
        ),
    }
];


class taskManage extends React.Component {
    render() {
        return (
        <div>
            <div className='taskTitle'>
                任务管理
            </div>
            <div className='tableSty'>
                <Table
                    rowClassName={() => 'editable-row'}
                    bordered
                    columns={columns}
                />
            </div>
        </div>
        );
    }
}
export default taskManage;
