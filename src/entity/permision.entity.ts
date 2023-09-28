import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Role } from './role.entity';

@Entity('permission')
export class Permission extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'permission_id' })
  permissionId: number;

  @Column()
  type: string;

  @ManyToMany(() => Role, (role) => role.permissions)
  @JoinTable({
    name: 'role_permission',
    joinColumn: {
      name: 'role_id',
      referencedColumnName: 'permissionId',
    },
    inverseJoinColumn: {
      name: 'permission_id',
      referencedColumnName: 'roleId',
    },
  })
  roles: Role[];
}
