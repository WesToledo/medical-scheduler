import { CommonPropertiesEntity } from 'src/shared/common.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'treatment' })
export class Treatment extends CommonPropertiesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  value: number;
}
