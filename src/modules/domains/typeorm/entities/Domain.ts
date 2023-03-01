import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('domains')
class Domain {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  client_id: string;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column({ default: 'Ativo' })
  status: string;

  @Column()
  buyDate: Date;

  @Column()
  dueDate: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Domain;
