import 'jest'

interface IEloquent {
  attributes: Object
}

class EloquentProxy<Target, Type> {
  get(target: Target, key: string): Type | undefined {
    console.log('proxy get', typeof target[key], target, key)
    return undefined
    // return target[key]
  }

  set(target: Target, key: string, value: Type): boolean {
    console.log('proxy set', typeof value, target, key, value)
    // target[key] = value
    return true
  }
}
export class EloquentMongoose implements IEloquent {
  private __known: Array<string>
  attributes: Object

  constructor() {
    this.__known = []
    this.attributes = {}
    const prototype = Object.getPrototypeOf(this)
    console.log('getOwnPropertyNames this', Object.getOwnPropertyNames(this))
    console.log('getOwnPropertyNames EloquentMongoose', Object.getOwnPropertyNames(EloquentMongoose.prototype))
    console.log('getOwnPropertyNames', Object.getOwnPropertyNames(prototype))
    console.log('getOwnPropertyDescriptors', Object.getOwnPropertyDescriptors(prototype))

    const proxy: EloquentMongoose = new Proxy(this, new EloquentProxy<EloquentMongoose, {}>())
    return proxy
  }

  init() {
    // getOwnPropertyDescriptors just works if node version > 8.7
    const prototype = Object.getPrototypeOf(this)
    // for (const name in prototype) {
    // console.log('prototype.' + name)
    // }
    console.log('getOwnPropertyNames', Object.getOwnPropertyNames(prototype))
    console.log('getOwnPropertyDescriptors', Object.getOwnPropertyDescriptors(prototype))
  }

  save() {}

  static findById() {
    return 'find by id from ' + this.name
  }
}

type EloquentMongooseFullSpec<T> = {
  new (): EloquentMongoose & T
  findById: () => void
  find(): EloquentMongoose & T
}

class Eloquent {
  static Mongoose<T>(): EloquentMongooseFullSpec<T> {
    return <any>EloquentMongoose
  }
}

interface IUser {
  first_name: string
  last_name: string
}

class User extends Eloquent.Mongoose<IUser>() {
  constructor() {
    super()
  }

  get full_name(): string {
    return this.attributes['full_name']
  }

  set full_name(value) {
    this.attributes['full_name'] = value
  }

  // drop this syntax because it will not work with obfuscation
  // getFullNameAttribute() {}
}
const user = new User()

User.find()

class Child extends User {}
const child = new Child()

describe('concept', function() {
  it('should work', function() {
    console.log('class User')
    console.log(User)
    console.log(User.findById())
    // console.log('user.init', user.init())
    // console.log(user.first_name)
    user.full_name = 'test'
    user.first_name = 'test'
    // console.log(User.prototype.full_name)
    // console.log('-----------------------------------')
    // console.log('class Child')
    // console.log(Child)
    // console.log(Child.findById())
    // console.log(child.init())
    // console.log(child.last_name)
    // console.log('-----------------------------------')
  })
})
