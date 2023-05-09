import React from 'react';
import { Layout, Menu} from 'antd'
import {
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux";

const { Sider } = Layout;

const items = [
    {
        key:"1",
        label: '导航栏',
        icon: React.createElement(UserOutlined),
        children:[
            {
                key:"1-1",
                label: <NavLink to="/db">看板页面</NavLink>,
                icon: React.createElement(VideoCameraOutlined),
            },
           
            {
                key:"1-2",
                label: <NavLink to="/fs">尾盘竞价查询</NavLink>,
                icon: React.createElement(VideoCameraOutlined),
            },
            {
                key:"1-3",
                label: <NavLink to="/fm">文件管理</NavLink>,
                icon: React.createElement(VideoCameraOutlined),
            },
            {
                key:"1-4",
                label: <NavLink to="/td">当日涨幅</NavLink>,
                icon: React.createElement(VideoCameraOutlined),
            },

        ]
    },{
        key:"2",
        label: '配置',
        icon: React.createElement(UserOutlined),
        children:[{
            key:"2-1",
            label: <NavLink to="/404">404</NavLink>,
            icon: React.createElement(VideoCameraOutlined),
        },
        {
            key:"2-2",
            label: <NavLink to="/403">403</NavLink>,
            icon: React.createElement(VideoCameraOutlined),
        },
        {
            key:"2-3",
            label: <NavLink to="/havePermissions">权限查看</NavLink>,
            icon: React.createElement(VideoCameraOutlined),
        }]
    }
]

export default function Sidebar(){
    const collapsed = useSelector((state) => state.global.collapse)
    return(
        <Sider theme="light" collapsed={collapsed}  reverseArrow>
            <Menu mode="inline" defaultSelectedKeys={['1-1']} items={items} />
        </Sider>
    )
}
