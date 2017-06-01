import React, {PropTypes} from 'react'
import {connect} from 'dva'
import {Row, Col, Card} from 'antd'
import NumberCard from '../components/dashboard/numberCard'
import Quote from '../components/dashboard/quote'
import Sales from '../components/dashboard/sales'
import Weather from '../components/dashboard/weather'
import RecentSales from '../components/dashboard/recentSales'
import Comments from '../components/dashboard/comments'
import Completed from '../components/dashboard/completed'
import Browser from '../components/dashboard/browser'
import Cpu from '../components/dashboard/cpu'
import User from '../components/dashboard/user'
import styles from './dashboard.less'
import {color} from '../utils'

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff'
  }
}

function Dashboard ({dashboard}) {
  const {weather, sales, quote, numbers, recentSales, comments, completed, browser, cpu, user} = dashboard
  const numberCards = numbers.map((item, key) => <Col key={key} lg={6} md={12}>
    <NumberCard {...item} />
  </Col>)

  return (
    <Row gutter={24}>
      {numberCards}
      <Col lg={18} md={24}>
        <Card bordered={false} bodyStyle={{
          padding: '24px 36px 24px 0'
        }}>
          <Sales data={sales} />
        </Card>
      </Col>
      
    </Row>
  )
}

Dashboard.propTypes = {
  dashboard: PropTypes.object
}

export default connect(({dashboard}) => ({dashboard}))(Dashboard)
