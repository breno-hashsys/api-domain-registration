import AppError from '@shared/errors/AppError';
import { getRepository } from 'typeorm';
import Domain from '../typeorm/entities/Domain';

interface IRequest {
  id: string;
}

class DeleteDomainService {
  public async execute({ id }: IRequest): Promise<void> {
    const domainsRepository = getRepository(Domain);

    const domain = await domainsRepository.findOne({ id });

    if (!domain) {
      throw new AppError('Domain not found.');
    }

    await domainsRepository.remove(domain);
  }
}

export default DeleteDomainService;
