import { autoload } from 'najs'
import { Todo } from '../../Models/Todo'

export class TodoRepository {
  static className: string = 'TodoRepository'

  @autoload(Todo) todoModel: Todo
}
