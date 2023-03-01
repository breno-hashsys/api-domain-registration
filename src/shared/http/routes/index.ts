import { Router } from 'express';
import domainsRouter from '@modules/domains/routes/domains.routes';

const routes = Router();

routes.use('/domains', domainsRouter);

export default routes;
