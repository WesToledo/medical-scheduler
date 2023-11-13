import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { CommonPropertiesEntity } from '../shared/common.entity';
import { UserRole } from 'src/common/constants/enums';

@Entity({ name: 'user' })
@Unique(['username'])
export class User extends CommonPropertiesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({})
  username: string;

  @Column({})
  name: string;

  @Column({ select: false })
  password: string;

  @Column({})
  type: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.RECEPCIONIST })
  role: UserRole;
}
