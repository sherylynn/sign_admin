import React, { PropTypes } from 'react'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import ActiList from '../components/actis/list'
import ActiSearch from '../components/actis/search'
import ActiModal from '../components/actis/modal'

function Actis ({ location, dispatch, actis }) {
  const { loading, list, pagination, currentItem, modalVisible, modalType, isMotion } = actis
  const { field, keyword } = location.query

  const actiModalProps = {
    item: modalType === 'create' ? {} : currentItem,
    type: modalType,
    visible: modalVisible,
    onOk (data) {
      dispatch({
        type: `actis/${modalType}`,
        payload: data
      })
    },
    onCancel () {
      dispatch({
        type: 'actis/hideModal'
      })
    }
  }

  const actiListProps = {
    dataSource: list,
    loading,
    pagination: pagination,
    location,
    isMotion,
    onPageChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname: pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize
        }
      }))
    },
    onDeleteItem (email) {
      dispatch({
        type: 'actis/delete',
        payload: email
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'actis/showModal',
        payload: {
          modalType: 'update',
          currentItem: item
        }
      })
    }
  }

  const actiSearchProps = {
    field,
    keyword,
    isMotion,
    onSearch (fieldsValue) {
      fieldsValue.keyword.length ? dispatch(routerRedux.push({
        pathname: '/actis',
        query: {
          field: fieldsValue.field,
          keyword: fieldsValue.keyword
        }
      })) : dispatch(routerRedux.push({
        pathname: '/actis'
      }))
    },
    onAdd () {
      dispatch({
        type: 'actis/showModal',
        payload: {
          modalType: 'create'
        }
      })
    },
    switchIsMotion () {
      dispatch({type: 'actis/switchIsMotion'})
    }
  }

  const ActiModalGen = () =>
    <ActiModal {...actiModalProps} />

  return (
    <div className='content-inner'>
      <ActiSearch {...actiSearchProps} />
      <ActiList {...actiListProps} />
      <ActiModalGen />
    </div>
  )
}

Actis.propTypes = {
  actis: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func
}

export default connect(({actis}) => ({actis}))(Actis)
