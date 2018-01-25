import './autoload'
import Najs from 'najs'

Najs.use(require('config'))
  .bind('HttpDriver', 'ExpressApp')
  .start({
    port: 3000
  })
