import './autoload'
import * as Path from 'path'
import Najs, { ExpressHttpDriverServiceProvider } from 'najs'

// Najs.bind('HttpDriver', 'ExpressApp').start()
Najs.workingDirectory(Path.join(__dirname, '..'))
  .classes('./autoload')
  .providers([
    /*
    * Najs Framework Service Providers...
    */
    ExpressHttpDriverServiceProvider
    // 'CacheServiceProvider',
    // 'RedisServiceProvider',
    // 'MongooseServiceProvider',
    // 'ValidationServiceProvider',
    // 'LoggerServiceProvider',
    // 'HttpDriverServiceProvider'
    /*
    * Package Service Providers...
    */
    /*
    * Application Service Providers...
    */
  ])
  .start()
