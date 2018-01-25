import * as Express from 'express'
import * as Http from 'http'
import { ExpressHttpDriver, register, Log } from 'najs'
import { HttpDriverStartOptions } from 'najs'

class ExpressApp extends ExpressHttpDriver {
  static className: string = 'ExpressApp'

  getClassName() {
    return ExpressApp.className
  }

  setup(): Express.Express {
    const app = Express()
    return app
  }

  start(options: HttpDriverStartOptions) {
    const server = Http.createServer(this.express)
    server.listen(options.port, options.host)
    Log.info('Listening at port ' + options.host + ' ' + options.port)
  }
}
register(ExpressApp)
