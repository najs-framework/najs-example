import { ExpressCsurfMiddleware, HttpKernel as NajsHttpKernel } from 'najs'

export class HttpKernel extends NajsHttpKernel {
  protected middleware = {
    csrf: ExpressCsurfMiddleware.className
  }
}
