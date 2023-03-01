import { Router } from 'express';
import DomainsController from '../controllers/DomainsController';
import { celebrate, Joi, Segments } from 'celebrate';

const domainsRouter = Router();
const domainsController = new DomainsController();

domainsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      price: Joi.number().min(0).precision(2).required(),
      client_id: Joi.string().uuid().required(),
    },
  }),
  domainsController.create,
);

domainsRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  domainsController.show,
);

export default domainsRouter;
