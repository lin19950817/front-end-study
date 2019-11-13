/**
 * UI组件
 *
 * @author LinZhenNan lin.zhennan@hand-china.com 2019/11/12 17:13
 */
import React, {Component} from 'react';
import {Input, Button, List, Typography} from 'antd';

class TodoListUI extends Component {
    render() {
        // 页面渲染
        return (
            <div style={{marginTop: "10px", marginLeft: "10px"}}>
                <div>
                    <Input onChange={this.props.handleInputChange} value={this.props.inputValue} placeholder='todo info'
                           style={{width: "300px", marginRight: "10px"}}/>
                    <Button onClick={this.props.handleBtnClick} type="primary">提交</Button>
                    <List
                        style={{marginTop: "10px", width: "375px"}}
                        header={<div>Header</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item, index) => (
                            <List.Item onClick={() => {this.props.handleItemDelete(index)}}>
                                <Typography.Text mark>[ITEM]</Typography.Text> {item}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }
}

export default TodoListUI;
