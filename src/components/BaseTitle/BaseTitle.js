/*
  type 属性，   required 前面展示红星  vertical 前面展示 竖杠  默认都不展示
  value 属性: 展示的值
  fontSize 属性: 字体大小 默认12px     fontSize="14px"

*/
import React, { Component } from 'react';
import './BaseTitle.css';
import { Tooltip, Icon } from 'antd';


export class BaseTitle extends Component {
  constructor(props) {
    super(props);
  }

  selectClassName(type) {
    switch (type) {
      case 'required':
        return 'baseTitleRequired'
      case 'vertical':
        return 'baseTitleVertical'
      default:
        return 'baseTitleLayer'
    }
  }

  render() {
    let fontSize=this.props.fontSize && this.props.fontSize || "12px";
    let type=this.props.type;
    let classname=this.selectClassName(type);
    return (
    <div>
        <span className={classname} style={{fontSize:fontSize,marginRight:'10px'}}>{this.props.value || 'BaseTitle'}</span>
        {
          this.props.tooltip ? <Tooltip placement="bottom" title="若勾画区域中包含的大型农场有类似区划图(各个区域的边界情况)，可附带选择上传。">
          <Icon type="exclamation-circle" />
        </Tooltip> : null
        }
    </div>
    )
  }
}
