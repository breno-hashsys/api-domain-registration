import AppError from '@shared/errors/AppError';
import { getRepository } from 'typeorm';
import Domain from '../typeorm/entities/Domain';

interface IRequest {
  id: string;
  status: string;
}

class UpdateStatusDomainService {
  public async execute({ id, status }: IRequest): Promise<Domain> {
    const domainsRepository = getRepository(Domain);

    const domain = await domainsRepository.findOne({ id });

    if (!domain) {
      throw new AppError('Domain not found.');
    }

    domain.status = status;

    await domainsRepository.save(domain);

    return domain;
  }
}

export default UpdateStatusDomainService;
