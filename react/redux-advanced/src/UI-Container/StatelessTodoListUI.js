/**
 * 将 TodoListUI组件封装成无状态组件
 *
 * @author LinZhenNan lin.zhennan@hand-china.com 2019/11/13 11:06
 */
import React from 'react';
import {Input, Button, List, Typography} from 'antd';

const StatelessTodoListUI = (props) => {
    return (
        <div style={{marginTop: "10px", marginLeft: "10px"}}>
            <div>
                <Input onChange={props.handleInputChange} value={props.inputValue} placeholder='todo info'
                       style={{width: "300px", marginRight: "10px"}}/>
                <Button onClick={props.handleBtnClick} type="primary">提交</Button>
                <List
                    style={{marginTop: "10px", width: "375px"}}
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={() => {
                            props.handleItemDelete(index)
                        }}>
                            <Typography.Text mark>[ITEM]</Typography.Text> {item}
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );
}

export default StatelessTodoListUI;
