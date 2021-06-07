import { galaxysService } from "../services/GalaxysService";
import BaseController from "../utils/BaseController";

export class GalaxysController extends BaseController {
  constructor() {
    super("api/galaxys")
    this.router
      .get("", this.getGalaxys)
      .post("", this.createGalaxy)
      .put("/:id", this.updateGalaxy)
      .delete("/:id", this.DeleteGalaxy)
  }
  async deleteGalaxy(req, res, next) {
    try {
      let galaxy = await galaxysService.deleteGalaxy(req.params.id)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async updateGalaxy(req, res, next) {
    try {
      let id = req.params.id
      let galaxy = await galaxysService.updateGalaxy(id, req.body)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
  async createGalaxy(req, res, next) {
    try {
      let galaxy = await galaxysService.createGalaxy(req.body)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async getGalaxys(req, res, next) {
    try {
      let galaxys = await galaxysService.getGalaxys()
      return res.send(galaxys)
    } catch (error) {
      next(error)
    }
  }
}