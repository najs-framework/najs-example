import { ExpressController, Response } from 'najs'

export class UserController extends ExpressController {
  static className = 'UserController'

  getClassName() {
    return UserController.className
  }

  getRegister() {
    return Response.view('user/register')
  }
}
