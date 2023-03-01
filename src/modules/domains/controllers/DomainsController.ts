import { Request, Response } from 'express';
import CreateDomainService from '../services/CreateDomainService';
import ListDomainService from '../services/ListDomainService';
import ShowDomainService from '../services/ShowDomainService';
import UpdateStatusDomainService from '../services/UpdateStatusDomainService';

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

  public async index(request: Request, response: Response): Promise<Response> {
    const listDomains = new ListDomainService();

    const domains = await listDomains.execute();

    return response.json(domains);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showDomain = new ShowDomainService();

    const domain = await showDomain.execute({ id });

    return response.json(domain);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { status } = request.body;
    const { id } = request.params;

    const updateStatusDomain = new UpdateStatusDomainService();

    const domain = await updateStatusDomain.execute({
      id,
      status,
    });

    return response.json(domain);
  }
}
