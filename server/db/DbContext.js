import ValueSchema from '../models/Value'
import mongoose from 'mongoose'
import GalaxySchema from '../models/Galaxy'
import StarSchema from '../models/Star'
import PlanetSchema from '../models/Planet'
import MoonSchema from '../models/Moon'

class DbContext {
  Values = mongoose.model('Value', ValueSchema)
  Galaxies = mongoose.model('Galaxy', GalaxySchema)
  Stars = mongoose.model('Star', StarSchema)
  Planets = mongoose.model('Planet', PlanetSchema)
  Moons = mongoose.model('Moon', MoonSchema)
}

export const dbContext = new DbContext()
