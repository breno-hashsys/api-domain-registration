import AppError from '@shared/errors/AppError';
import { getRepository } from 'typeorm';
import Domain from '../typeorm/entities/Domain';

interface IRequest {
  client_id: string;
  name: string;
  price: number;
  status?: string;
}

class CreateDomainService {
  public async execute({
    client_id,
    name,
    price,
    status,
  }: IRequest): Promise<Domain> {
    const domainsRepository = getRepository(Domain);
    const domainExists = await domainsRepository.findOne({ name });

    if (domainExists) {
      throw new AppError('There is already one domain with this name');
    }

    const domain = domainsRepository.create({
      client_id,
      name,
      price,
      status,
    });

    await domainsRepository.save(domain);

    return domain;
  }
}

export default CreateDomainService;
