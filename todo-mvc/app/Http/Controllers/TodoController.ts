import { register, Controller } from 'najs'

@register()
export class TodoController extends Controller {
  static className: string = 'TodoController'

  getClassName() {
    return TodoController.className
  }
}
