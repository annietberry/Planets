import { planetsService } from "../services/PlanetsService";
import BaseController from "../utils/BaseController";

export class PlanetsController extends BaseController {
  constructor() {
    super("api/planets")
    this.router
      .get("", this.getPlanets)
      .post("", this.createPlanet)
      .put("/:id", this.updatePlanet)
      .delete("/:id", this.DeletePlanet)
  }
  async deletePlanet(req, res, next) {
    try {
      let planet = await planetsService.deletePlanet(req.params.id)
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }

  async updatePlanet(req, res, next) {
    try {
      let id = req.params.id
      let planet = await planetsService.updatePlanet(id, req.body)
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }
  async createPlanet(req, res, next) {
    try {
      let planet = await planetsService.createPlanet(req.body)
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }

  async getPlanets(req, res, next) {
    try {
      let planets = await planetsService.getPlanets()
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }
}