module.exports = {
  name: 'Ant Design Admin',
  prefix: 'antdAdmin',
  footerText: 'Ant Design Admin 版权所有 © 2016 由 zuiidea 支持',
  logoSrc: 'https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg',
  logoText: '后台',
  needLogin: true,
  //host:'http://a3.18e.pub:3000',
  host:'http://127.0.0.1:3000',
  //host:'http://192.168.0.249:3000',
  login:'/user/login',
  logout:'/user/logout',
  users:'/api/users',
  userInfo:'/userInfo',
  dashboard:'/dashboard'
}
