import React, { PropTypes } from 'react'
import { Form, Input, InputNumber, Radio, Modal } from 'antd'
const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 14
  }
}

const modal = ({
  visible,
  type,
  item = {},
  onOk,
  onCancel,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue
  }
}) => {
  function handleOk () {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        key: item.key
      }
      onOk(data)
    })
  }

  const modalOpts = {
    title: `${type === 'create' ? '新建用户' : '修改用户'}`,
    visible,
    onOk: handleOk,
    onCancel,
    wrapClassName: 'vertical-center-modal'
  }

  return (
    <Modal {...modalOpts}>
      <Form horizontal>
        <FormItem label='姓名：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('username', {
            initialValue: item.username,
            rules: [
              {
                required: true,
                message: '姓名未填写'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='身份证号：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('email', {
            initialValue: item.email,
            rules: [
              {
                required: true,
                message: '身份证号未填写'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='密码：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('password', {
            initialValue: item.password,
            rules: [
              {
                required: true,
                message: '密码未填写'
              }
            ]
          })(<InputNumber min={18} max={100} />)}
        </FormItem>
        <FormItem label='性别' hasFeedback {...formItemLayout}>
          {getFieldDecorator('性别', {
            initialValue: item['性别'],
            rules: [
              {
                required: true,
                type: 'boolean',
                message: '请选择性别'
              }
            ]
          })(
            <Radio.Group>
              <Radio value>男</Radio>
              <Radio value={false}>女</Radio>
            </Radio.Group>
          )}
        </FormItem>
        <FormItem label='出生年月：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('出生年月', {
            initialValue: item['出生年月'],
            rules: [
              {
                required: true,
                message: '出生年月未填写'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='学历：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('学历', {
            initialValue: item['学历'],
            rules: [
              {
                required: true,
                message: '学历未填写'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='入党日期：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('入党日期', {
            initialValue: item['入党日期'],
            rules: [
              {
                required: true,
                message: '入党日期未填写'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='电话：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('联系电话', {
            initialValue: item['联系电话'],
            rules: [
              {
                required: true,
                type: 'number',
                message: '不能为空'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='地址：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('家庭地址', {
            initialValue: item['家庭地址'],
            rules: [
              {
                required: true,
                message: '不能为空'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='手机：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('手机号', {
            initialValue: item['手机号'],
            rules: [
              {
                required: true,
                type: 'number',
                message: '不能为空'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='组别：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('组别', {
            initialValue: item['组别'],
            rules: [
              {
                required: true,
                message: '不能为空'
              }
            ]
          })(<Input />)}
        </FormItem>
        
      </Form>
    </Modal>
  )
}

modal.propTypes = {
  form: PropTypes.object.isRequired,
  visible: PropTypes.bool,
  type: PropTypes.string,
  item: PropTypes.object
}

export default Form.create()(modal)
