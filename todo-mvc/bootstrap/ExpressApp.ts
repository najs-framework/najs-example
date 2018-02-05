import { ExpressHttpDriver, register } from 'najs'
import * as Express from 'express'

class ExpressApp extends ExpressHttpDriver {
  static className: string = 'ExpressApp'

  getClassName() {
    return ExpressApp.className
  }

  setup(): Express.ExpressApp {
    const app = super.setup()
    app.use(function(err: any, req: any, res: any, next: any) {
      if (err.code !== 'EBADCSRFTOKEN') return next(err)

      // handle CSRF token errors here
      res.status(403)
      res.send('form tampered with')
    })
    return app
  }
}
register(ExpressApp)
