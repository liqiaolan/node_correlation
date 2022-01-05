import { Controller } from "egg";

export default class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const list = await ctx.service.home.homeList();
    console.log(ctx.helper.isH5Package('111'))
    ctx.success(list, "成功咯");
  }
  async deployEnum() {
    const { ctx } = this;
    const list = await ctx.service.home.getDeployEnum();
    ctx.success(list);
  }
}
