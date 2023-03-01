import { Request, Response } from 'express';
import CreateDomainService from '../services/CreateDomainService';
import ShowDomainService from '../services/ShowDomainService';

export default class DomainsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { client_id, name, price } = request.body;

    const createDomain = new CreateDomainService();

    const domain = await createDomain.execute({
      client_id,
      name,
      price,
    });

    return response.status(201).json(domain);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showDomain = new ShowDomainService();

    const domain = await showDomain.execute({ id });

    return response.json(domain);
  }
}
