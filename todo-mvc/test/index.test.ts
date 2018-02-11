// import '../autoload'
// import 'jest'
// import * as Express from 'express'
// import { Route, App, SystemClass, IHttpDriver, ExpressHttpDriver, Response } from 'najs'
// import { Test } from 'supertest'
// const supertest = require('supertest')

// describe('TodoController', function() {
//   let express: Express.Express
//   beforeAll(function() {
//     App.bind(SystemClass.HttpDriver, ExpressHttpDriver.className)
//     const driver = App.make<IHttpDriver>(SystemClass.HttpDriver)
//     Route.get('/', 'TodoController@getIndex')
//     express = driver.getNativeDriver()
//     driver.start({ createServer: false })
//   })

//   it('should register Route.get("/")', async function() {
//     const spy = Route.spy('get')
//     Route.get('/test', 'TodoController@getIndex')
//     expect(spy.calledWith('/test', 'TodoController@getIndex')).toBe(true)
//     Route.restoreFacade()
//   })

//   it('returns View "todo/index" for route "/"', async function() {
//     const spy = Response.spy('view')
//     const agent: Test = supertest(express)
//     await agent.get('/')
//     expect(spy.calledWith('todo/index')).toBe(true)
//     Response.restoreFacade()
//   })
// })
