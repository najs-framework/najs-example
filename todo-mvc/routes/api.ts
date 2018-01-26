import { Route, Response } from 'najs'
import { Request, Response as ExpressResponse } from 'express'

Route.get('/', function(request: Request, response: ExpressResponse) {
  return Response.json({ ok: true })
})
