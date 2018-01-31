import { Route, Response } from 'najs'
import { Request, Response as ExpressResponse } from 'express'

Route.get('/', function(request: Request, response: ExpressResponse) {
  return Response.json({ ok: true })
})

Route.get('/home', function(request: Request, response: ExpressResponse) {
  return response.render('home', {
    token: 'test'
  })
})
