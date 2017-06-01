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
      title: '标识',
      dataIndex: 'avatar',
      key: 'avatar',
      width: 64,
      className: styles.avatar,
      render: (text) => <img width={24} src={text} />
    }, {
      title: '主题',
      dataIndex: '主题',
      key: '主题',
      width:150
    }, {
      title: '时间',
      dataIndex: '时间',
      key: '时间',
      width:150
    }, {
      title: '地点',
      dataIndex: '地点',
      key: '地点',
      width:150
    }, {
      title: '积分',
      dataIndex: '积分',
      key: '积分',
      width:150
    }, {
      title: '内容',
      dataIndex: '内容',
      key: '内容',
      width:150
    }, {
      title: '参与人员',
      dataIndex: '参与人员',
      key: '参与人员',
      width:200
    }, {
      title: '操作',
      key: 'operation',
      width: 100,
      render: (text, record) => {
        return (<Dropdown overlay={<Menu onClick={(e) => handleMenuClick(record, e)}>
          <Menu.Item key='1'>编辑</Menu.Item>
          <Menu.Item key='2'>删除</Menu.Item>
          <Menu.Item key='3'>查看</Menu.Item>
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
