import { Eloquent } from 'najs-eloquent'
import { Schema } from 'mongoose'

export interface ITodo {
  id?: string
  name: string
}

export class Todo extends Eloquent.Mongoose<ITodo, Todo>() {
  static className: string = 'Todo'
  static timestamps: boolean = true
  static softDeletes: boolean = true

  getClassName() {
    return Todo.className
  }

  getSchema(): Schema {
    return new Schema({
      name: { type: String, required: true }
    })
  }
}
