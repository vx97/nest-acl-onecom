import {
  Controller,
  Delete,
  Get,
  NotFoundException,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from 'src/guards/role.guard';
import { Permissions } from 'src/decorator/permission.decorator';
import { Permission } from 'src/enums/permissions.enum';

@ApiTags('Products')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'), RoleGuard)
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  //Need to change logic to check against role instead on permissions
  @Permissions(Permission.CREATE, Permission.UPDATE)
  @Get()
  async getProduct() {
    try {
      return this.productsService.getProduct();
    } catch (error) {
      return new NotFoundException(error.message);
    }
  }

  @Permissions(Permission.CREATE, Permission.UPDATE)
  @Post()
  async createProduct() {
    try {
      return this.productsService.createProduct();
    } catch (error) {
      return new NotFoundException(error.message);
    }
  }

  @Permissions(Permission.CREATE, Permission.UPDATE)
  @Permissions(Permission.CREATE, Permission.UPDATE)
  @Patch()
  async updateProduct() {
    try {
      return this.productsService.updateProduct();
    } catch (error) {
      return new NotFoundException(error.message);
    }
  }

  @Permissions(Permission.CREATE, Permission.UPDATE)
  @Put()
  async replaceProduct() {
    try {
      return this.productsService.updateProduct();
    } catch (error) {
      return new NotFoundException(error.message);
    }
  }

  @Permissions(Permission.CREATE, Permission.UPDATE)
  @Delete()
  async deleteProduct() {
    try {
      return this.productsService.deleteProduct();
    } catch (error) {
      return new NotFoundException(error.message);
    }
  }
}
