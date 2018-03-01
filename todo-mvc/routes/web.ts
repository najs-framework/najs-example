import { Route } from 'najs'

Route.middleware('default').group(function() {
  Route.get('/', 'TodoController@getIndex')
  Route.post('/todo/add', 'TodoController@postAddTodo')
})
