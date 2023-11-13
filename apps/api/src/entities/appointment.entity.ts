import { AppointmentStatus } from 'src/common/constants/enums';
import { TreatmentModule } from 'src/common/modules/treatment/treatment.module';
import { CommonPropertiesEntity } from 'src/shared/common.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Patient } from './patient.entity';
import { Treatment } from './treatment.entity';
import { User } from './user.entity';

@Entity({ name: 'appointment' })
export class Appointment extends CommonPropertiesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Patient)
  @JoinColumn()
  patient: Patient;

  @OneToOne(() => User)
  @JoinColumn()
  doctor: User;

  @Column({ type: 'datetime' })
  startDateTime: Date;

  @Column({ type: 'datetime' })
  endDateTime: Date;

  @Column()
  duration: number;

  @Column({
    type: 'enum',
    enum: AppointmentStatus,
    default: AppointmentStatus.SCHEDULED,
  })
  status: AppointmentStatus;

  @ManyToMany(() => TreatmentModule)
  @JoinTable()
  treatments: Treatment[];

  @Column({ nullable: true })
  timeSpent: number;
}
