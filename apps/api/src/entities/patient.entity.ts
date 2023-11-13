import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { CommonPropertiesEntity } from '../shared/common.entity';
import { User } from './user.entity';

@Entity({ name: 'patient' })
@Unique(['code', 'email'])
export class Patient extends CommonPropertiesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  code: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ type: 'datetime' })
  birthdate: Date;

  @Column()
  personalPhone: string;

  @Column()
  emergencyPhone: string;

  @Column()
  emergencyPhoneName: string;

  @OneToOne(() => User)
  @JoinColumn()
  doctor: User;

  @Column({ length: 500 })
  obs: string;

  @Column({ type: 'datetime' })
  firstAppointment: Date;
}
