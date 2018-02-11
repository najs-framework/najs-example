import { Route } from 'najs'
import { apiRoutes } from '../../routes/api'

export class RouteServiceProvider {
  public register() {}

  public boot() {
    Route.middleware('api').group(apiRoutes)
  }
}
