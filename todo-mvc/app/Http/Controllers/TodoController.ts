import { register, Controller, Response } from 'najs'

@register()
export class TodoController extends Controller {
  static className: string = 'TodoController'

  getClassName() {
    return TodoController.className
  }

  getIndex() {
    return Response.view('todo/index')
  }
}
