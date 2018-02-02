import Najs, { NajsPath, ExpressHttpDriver, register } from 'najs'
import * as Express from 'express'

class ExpressApp extends ExpressHttpDriver {
  static className: string = 'ExpressApp'

  getClassName() {
    return ExpressApp.className
  }

  protected setup(): any {
    const app = super.setup()
    app.use(Express.static(Najs.path(NajsPath.Public)))
    return app
  }
}
register(ExpressApp)
