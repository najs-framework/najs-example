import { Route } from 'najs'

Route.middleware('csrf').group(function() {
  Route.get('/', 'TodoController@getIndex')
  Route.post('/todo/add', 'TodoController@postAddTodo')
})
