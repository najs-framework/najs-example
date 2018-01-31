import { ExpressHttpDriver, register } from 'najs'
import * as Express from 'express'
import * as ExpressHandlerBars from 'express-handlebars'
import * as Path from 'path'

class ExpressApp extends ExpressHttpDriver {
  static className: string = 'ExpressApp'

  getClassName() {
    return ExpressApp.className
  }

  setup(): Express.Express {
    const app: Express.Express = super.setup()
    const viewPath = Path.join(__dirname, '..', '..', 'resources', 'view')
    app.engine(
      'hbs',
      ExpressHandlerBars({
        layoutsDir: Path.join(viewPath, 'layout'),
        extname: '.hbs',
        defaultLayout: 'default'
      })
    )
    app.set('view engine', 'hbs')
    app.set('views', viewPath)
    return app
  }
}
register(ExpressApp)
