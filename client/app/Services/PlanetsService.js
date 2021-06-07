import { dbContext } from "../db/DbContext";

class PlanetsService {
  async deletePlanet(id) {
    let planet = await dbContext.Planets.findByIdAndDelete(id)
    return planet
  }

  async updatePlanet(id, planetData) {
    let planet = await dbContext.Planets.findByIdAndUpdate(id, planetData, { new: true, runValidators: true })
    return planet
  }
  async createPlanet(planetData) {
    let planet = await dbContext.Planets.create(planetData)
    return planet
  }

  async getPlanets() {
    let planets = await dbContext.Planets.find({})
    return planets
  }

}

export const planetsService = new PlanetsService()