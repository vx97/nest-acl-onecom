import { SetMetadata } from '@nestjs/common';
import { Permission } from 'src/enums/permissions.enum';

export const Permissions = (...permissions: Permission[]) =>
  SetMetadata('permissions', permissions);
