import { register, ExpressCsurfMiddleware, HttpKernel as NajsHttpKernel } from 'najs'

@register()
export class HttpKernel extends NajsHttpKernel {
  protected middleware = {
    csrf: ExpressCsurfMiddleware.className
  }
}
