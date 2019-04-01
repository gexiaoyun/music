基于react 模仿rc-component/dialog 写的一个弹出框

## DEMO:
```
<Modal 
    visible={true}
    maskOpen={true}
    onOk={this.ok}
    onCancel={this.cancel}
/>

<Modal 
    visible={true}
    maskOpen={true}
    onOk={this.ok}
    onCancel={this.cancel}
>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
</Modal>
```
## parameter:
参数 | 说明 | 类型 | 默认值
----|------|----|----
maskOpen | 是否开启遮罩层  | Boolean | true
header | 是否显示头部  | Boolean | true
title | 头部显示文字  | string | 'Modal'
footer | 是否显示底部 | Boolean | true
onOk | 确定按钮点击事件 | function | 无
onCancel | 取消按钮点击事件 | function | on
width | 宽度 | string | '778px'
height | 高度 | string | '53px'
okText | 确定按钮文字 | string | 'ok'
cancelText | 取消按钮文字 | string | 'cancel'

