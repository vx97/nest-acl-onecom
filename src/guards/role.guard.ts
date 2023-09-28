import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from 'src/entity/role.entity';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  async canActivate(context: ExecutionContext) {
    const permissions = this.reflector.getAllAndOverride<string[]>(
      'permissions',
      [context.getHandler(), context.getClass()],
    );

    const request = context.switchToHttp().getRequest();

    const { roleId } = request.user;

    const getPermissions = await Role.findOne({
      where: { roleId: roleId },
      relations: ['permissions'],
    });

    let assignedPermissions = getPermissions.permissions.map((e) => e.type);

    console.log('PERMS', assignedPermissions, permissions);

    let hasAccess = true;

    if (!permissions) hasAccess = false;
    permissions.forEach((e) => {
      if (!assignedPermissions.includes(e)) {
        hasAccess = false;
      }
    });
    return hasAccess;
  }
}
