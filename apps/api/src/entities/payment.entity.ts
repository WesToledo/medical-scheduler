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
import { Appointment } from './appointment.entity';
import { PaymentMethods } from 'src/common/constants/enums';

@Entity({ name: 'payment' })
export class Payment extends CommonPropertiesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'datetime' })
  date: Date;

  @Column()
  discount: number;

  @OneToOne(() => Appointment)
  @JoinColumn()
  appointment: Appointment;

  @Column()
  paid: boolean;

  @Column({ type: 'enum', enum: PaymentMethods, default: null, nullable: true })
  paymentMethod: PaymentMethods;
}
