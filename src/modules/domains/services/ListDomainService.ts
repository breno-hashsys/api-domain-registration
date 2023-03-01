import { getRepository } from 'typeorm';
import Domain from '../typeorm/entities/Domain';

class ListDomainService {
  public async execute(): Promise<Domain[]> {
    const domainsRepository = getRepository(Domain);

    const domains = domainsRepository.find();

    return domains;
  }
}

export default ListDomainService;
