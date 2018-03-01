import { register, HttpKernel as NajsHttpKernel } from 'najs'

@register()
export class HttpKernel extends NajsHttpKernel {
  protected middleware = {}
}
