import React, {PropTypes} from 'react'
import {Table, Dropdown, Button, Menu, Icon, Modal} from 'antd'
import styles from './list.less'
import classnames from 'classnames'
import TableBodyWrapper from '../common/TableBodyWrapper'

const confirm = Modal.confirm

function list ({ loading, dataSource, pagination, onPageChange, onDeleteItem, onEditItem, isMotion, location }) {
  const handleMenuClick = (record, e) => {
    if (e.key === '1') {
      onEditItem(record)
    } else if (e.key === '2') {
      confirm({
        title: '您确定要删除这条记录吗?',
        onOk () {
          onDeleteItem(record.email)
        }
      })
    }
  }

  const columns = [
    {
      title: '头像',
      dataIndex: 'avatar',
      key: 'avatar',
      width: 64,
      className: styles.avatar,
      render: (text) => <img width={24} src={text} />
    }, {
      title: '姓名',
      dataIndex: '姓名',
      key: '姓名'
    }, {
      title: '学历',
      dataIndex: '学历',
      key: '学历'
    }, {
      title: '生日',
      dataIndex: '出生年月',
      key: '出生年月'
    }, {
      title: '性别',
      dataIndex: 'isMale',
      key: 'isMale',
      render: (text) => <span>{text
            ? '男'
            : '女'}</span>
    }, {
      title: '电话号码',
      dataIndex: '联系电话',
      key: '联系电话',
      render: (text) => <span>{text
            ? text
            : '暂无'}</span>
    }, {
      title: '手机号',
      dataIndex: '手机号',
      key: '手机号',
      render: (text) => <span>{text
            ? text
            : '暂无'}</span>
    }, {
      title: '家庭地址',
      dataIndex: '家庭地址',
      key: '家庭地址'
    }, {
      title: '入党日期',
      dataIndex: '入党日期',
      key: '入党日期'
    }, {
      title: '操作',
      key: 'operation',
      width: 100,
      render: (text, record) => {
        return (<Dropdown overlay={<Menu onClick={(e) => handleMenuClick(record, e)}>
          <Menu.Item key='1'>编辑</Menu.Item>
          <Menu.Item key='2'>删除</Menu.Item>
        </Menu>}>
          <Button style={{ border: 'none' }}>
            <Icon style={{ marginRight: 2 }} type='bars' />
            <Icon type='down' />
          </Button>
        </Dropdown>)
      }
    }
  ]

  const getBodyWrapperProps = {
    page: location.query.page,
    current: pagination.current
  }

  const getBodyWrapper = body => isMotion ? <TableBodyWrapper {...getBodyWrapperProps} body={body} /> : body

  return (
    <div>
      <Table
        className={classnames({[styles.table]: true, [styles.motion]: isMotion})}
        bordered
        scroll={{ x: 1200 }}
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        onChange={onPageChange}
        pagination={pagination}
        simple
        rowKey={record => record.email}
        getBodyWrapper={getBodyWrapper}
      />
    </div>
  )
}

list.propTypes = {
  loading: PropTypes.bool,
  dataSource: PropTypes.array,
  pagination: PropTypes.object,
  onPageChange: PropTypes.func,
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  isMotion: PropTypes.bool,
  location: PropTypes.object
}

export default list
