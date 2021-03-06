import { TodoService } from './../../Lib/Services/TodoService'
import { ExpressController, Response, autoload } from 'najs'

export class TodoController extends ExpressController {
  static className: string = 'TodoController'
  @autoload(TodoService) protected todoService: TodoService
  getClassName() {
    return TodoController.className
  }

  getIndex() {
    console.log(this.request.cookies)
    console.log(this.request.signedCookies)

    // this.response.cookie('test', { test: 'value' }, { signed: true })
    this.response.cookie('test', { test: 'value' }, { signed: false })
    this.response.cookie('json', { test: 'value' }, { signed: false })
    // this.session.put('something', { test: 'value' })
    this.todoService.getTodo()
    return Response.view('todo/index')
  }

  postAddTodo() {
    // this.todoService.createTodo(this.input.get('name'))
    this.session.flash('message', this.input.get('name'))
    return Response.back()
  }
}
