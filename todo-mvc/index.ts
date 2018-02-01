import './autoload'
import Najs from 'najs'

Najs.bind('HttpDriver', 'ExpressApp').start({
  port: 3000
})
