import {
  BeforeInsert,
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

  @Column({ unique: true })
  name: string;

  @Column('decimal')
  price: number;

  @Column()
  status: string;

  @Column()
  buyDate: Date;

  @Column()
  dueDate: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  setDefaultStatus() {
    if (!this.status) {
      this.status = 'Ativo';
    }
  }
}

export default Domain;
