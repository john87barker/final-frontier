import { starsService } from '../services/StarsService'
import BaseController from '../utils/BaseController'
import { planetsService } from '../services/PlanetsService'

export class StarsController extends BaseController {
  constructor() {
    super('api/stars')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .get('/:id/planets', this.getPlanetsByStarId)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.destroy)
  }

  async getPlanetsByStarId(req, res, next) {
    try {
      const planets = await planetsService.getPlanetsByStarId({ starId: req.params.id })
      res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      const star = await starsService.getAll(req.query)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const star = await starsService.getById(req.params.id)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const star = await starsService.create(req.body)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const star = await starsService.edit(req.body)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      const star = await starsService.destroy(req.params.id)
      res.send({ message: 'deletion successful' })
    } catch (error) {
      next(error)
    }
  }
}
