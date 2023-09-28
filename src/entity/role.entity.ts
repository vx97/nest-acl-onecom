import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
} from 'typeorm';
import { Permission } from './permision.entity';

@Entity('role')
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'role_id' })
  roleId: number;

  @Column()
  name: string;

  @ManyToMany(() => Permission, (permissions) => permissions.roles)
  permissions: Permission[];
}
