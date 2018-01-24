import { Route } from 'najs'

Route.prefix('CSRF')
  .middleware('CSRF')
  .group(function() {})

Route.middleware('CSRF')
  .prefix('CSRF')
  .group(function(this: any) {
    Route.post('/todo')
      .requireAuth()
      .validateInput()
      .responseFormatter()

    // Route.post('/', 'TodoController@create', {})
  })

Route.group(function() {
  Route.post('/todo')
    .requireAuth()
    .validateInput()
    .responseFormatter()

  // Route.post('/', 'TodoController@create', {})

  Route.middleware('CSRF').group(function() {
    Route.get('/')
  })
})

Route.middleware('Test').post('/todo')
Route.prefix('Test').post('/todo')

Route.middleware('Test')
  .post('/todo')
  .requireAuth()
  .validateInput()
  .responseFormatter()

Route.prefix('Test')
  .post('/todo')
  .requireAuth()
  .validateInput()
  .responseFormatter()

Route.redirect('something', 'something else', 301)

// Route.post('/todo', 'TodoController@test')
Route.post('/todo')
