import { TodoService } from './../../Lib/Services/TodoService'
import { ExpressController, Response, autoload } from 'najs'

export class TodoController extends ExpressController {
  static className: string = 'TodoController'
  @autoload(TodoService) protected todoService: TodoService
  getClassName() {
    return TodoController.className
  }

  getIndex() {
    // this.session.put('something', { test: 'value' })
    this.todoService.getTodo()
    return Response.view('todo/index')
  }

  postAddTodo() {
    this.todoService.createTodo(this.input.get('name'))
    // this.session.clear()
    // console.log(this.session.all())
    return Response.back()
  }
}
