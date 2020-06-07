import express from 'express';
import PointsController from './controller/PointsController';
import ItemsController from './controller/ItemsController';
import multer from'multer';
import uploadConfig from './config/upload';
import { celebrate, Joi } from 'celebrate';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();
const upload = multer(uploadConfig);

routes.get('/items', itemsController.index);

routes.post('/points',
           upload.single('image'),
           celebrate({
             body: Joi.object().keys({
               name: Joi.string().required(),
               email: Joi.string().required().email(),
               whatsapp: Joi.number().required(),
               latitude: Joi.number().required(),
               longitude: Joi.number().required(),
               city: Joi.string().required(),
               uf: Joi.string().required().max(2),
               items: Joi.string().required()
             })
           }), 
           pointsController.create);

routes.get('/points/:id', pointsController.show);
routes.get('/points', pointsController.index);

export default routes;