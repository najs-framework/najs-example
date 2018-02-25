import './autoload'
import * as Path from 'path'
import Najs, { ExpressHttpDriverServiceProvider, MongooseServiceProvider } from 'najs'

Najs.workingDirectory(Path.join(__dirname, '..'))
  .classes('./autoload')
  .providers([
    /*
    * Najs Framework Service Providers...
    */
    ExpressHttpDriverServiceProvider,
    MongooseServiceProvider
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
