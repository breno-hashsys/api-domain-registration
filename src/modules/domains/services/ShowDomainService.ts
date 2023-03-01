import AppError from '@shared/errors/AppError';
import { getRepository } from 'typeorm';
import Domain from '../typeorm/entities/Domain';

interface IRequest {
  id: string;
}

class ShowDomainService {
  public async execute({ id }: IRequest): Promise<Domain> {
    const domainsRepository = getRepository(Domain);

    const domain = await domainsRepository.findOne({ id });

    if (!domain) {
      throw new AppError('Domain not found.');
    }

    return domain;
  }
}

export default ShowDomainService;
