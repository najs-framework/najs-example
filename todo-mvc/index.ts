import './autoload'
import * as Path from 'path'
import Najs, {
  register,
  SessionHandlebarsHelper,
  RequestDataReaderHandlebarsHelper,
  ExpressHttpDriverServiceProvider,
  MongooseServiceProvider,
  HandlebarsViewServiceProvider
} from 'najs'

register(SessionHandlebarsHelper)
register(RequestDataReaderHandlebarsHelper)

Najs.workingDirectory(Path.join(__dirname, '..'))
  .classes('./autoload')
  .providers([
    /*
    * Najs Framework Service Providers...
    */
    ExpressHttpDriverServiceProvider,
    MongooseServiceProvider,
    HandlebarsViewServiceProvider.withHandlebarsHelpers()
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
