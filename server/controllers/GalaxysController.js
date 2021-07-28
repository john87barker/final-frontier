import { galaxiesService } from '../services/GalaxiesService'
import BaseController from '../utils/BaseController'

export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.destroy)
  }

  async getAll(res, req, next) {
    try {
      const galaxy = await galaxiesService.getAll(req.query)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async getById(res, req, next) {
    try {
      const galaxy = await galaxiesService.getById(req.params.id)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async create(res, req, next) {
    try {
      const galaxy = await galaxiesService.create(req.body)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async edit(res, req, next) {
    try {
      req.body.id = req.params.id
      const galaxy = await galaxiesService.edit(req.body)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async destroy(res, req, next) {
    try {
      const galaxy = await galaxiesService.destroy(req.params.id)
      res.send({ galaxy, message: 'deletion successful' })
    } catch (error) {
      next(error)
    }
  }
}
