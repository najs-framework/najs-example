import { autoload } from 'najs'
import { TodoRepository } from '../Repositories/TodoRepository'
import { ITodo, Todo } from '../../Models/Todo'

export class TodoService {
  static className: string = 'TodoService'

  @autoload(Todo) protected todoModel: Todo
  @autoload(TodoRepository) protected todoRepository: TodoRepository

  getTodo() {
    console.log(this['__autoloadMetadata'])
  }

  async createTodo(name: string): Promise<ITodo> {
    const todo = new Todo({ name: name })
    await todo.save()
    return todo
  }
}
