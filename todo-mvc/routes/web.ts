import { Route } from 'najs'

Route.middleware('default').group(function() {
  Route.get('/', 'TodoController@getIndex')
  Route.post('/todo/add', 'TodoController@postAddTodo')
  Route.post('/todo/update', 'TodoController@postAddTodo')
})

Route.middleware('session', 'cookie').group(function() {
  Route.get('/test', 'TodoController@getIndex')
})
