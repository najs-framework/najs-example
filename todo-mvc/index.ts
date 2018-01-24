import Najs, { register } from 'najs'
import * as Classes from './__autoload.classes'

Najs.loadClasses(Classes)
  .remap({ TodoRepository: 'TodoRepositoryCached' })
  .remap('TodoRepository', 'TodoRepositoryCached')
  .start({
    port: 3000
  })
