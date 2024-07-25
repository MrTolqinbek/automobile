import { AutoMobileType } from 'src/api/automobile/enum/auto_mobile_type.enum';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
@Entity()
export class Automobile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  model: string;

  @Column({
    type: 'enum',
    enum: AutoMobileType,
  })
  type_auto: AutoMobileType;

  @Column()
  year_publication: number;

  @Column()
  color: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
