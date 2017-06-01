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
    title: `${type === 'create' ? '新建活动' : '修改活动'}`,
    visible,
    onOk: handleOk,
    onCancel,
    wrapClassName: 'vertical-center-modal'
  }

  return (
    <Modal {...modalOpts}>
      <Form horizontal>
        <FormItem label='唯一标识号：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('_id', {
            initialValue: item._id
            ? item._id
            : '******',
            rules: [
              {
                required: true,
                message: '唯一标识号未填写'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='主题：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('主题', {
            initialValue: item['主题'],
            rules: [
              {
                required: true,
                message: '主题未填写'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='时间：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('时间', {
            initialValue: item['时间'],
            rules: [
              {
                required: true,
                message: '时间未填写'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='地点' hasFeedback {...formItemLayout}>
          {getFieldDecorator('地点', {
            initialValue: item['地点'],
            rules: [
              {
                required: true,
                message: '地点未填写'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label='积分：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('积分', {
          initialValue: item['积分'],
            rules: [
              {
                required: true,
                message: '积分未填写'
              }
            ]
          })(<Input />)}
        </FormItem>
        
        
        <FormItem label='内容：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('内容', {
            initialValue: item['内容'],
            rules: [
              {
                required: true,
                message: '内容未填写'
              }
            ]
          })(<Input type="textarea" rows={5} />)}
        </FormItem>
        <FormItem label='参与人员：' hasFeedback {...formItemLayout}>
          {getFieldDecorator('参与人员', {
            initialValue: item['参与人员']
            ? item['参与人员']
            : '[]',
            rules: [
              {
                required: true,
                message: '参与人员未填写'
              }
            ]
          })(<Input type="textarea" rows={5}  />)}
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
