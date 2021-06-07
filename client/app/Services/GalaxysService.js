import { dbContext } from "../db/DbContext";

class GalaxysService {
  async deleteGalaxy(id) {
    let galaxy = await dbContext.Galaxys.findByIdAndDelete(id)
    return galaxy
  }

  async updateGalaxy(id, galaxyData) {
    let galaxy = await dbContext.Galaxys.findByIdAndUpdate(id, galaxyData, { new: true, runValidators: true })
    return galaxy
  }
  async createGalaxy(galaxyData) {
    let galaxy = await dbContext.Galaxys.create(galaxyData)
    return car
  }

  async getCars() {
    let galaxys = await dbContext.Galaxys.find({})
    return galaxys
  }

}

export const galaxysService = new GalaxysService()