import {
  Controller,
  Delete,
  Get,
  NotFoundException,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async getProduct() {
    try {
      return this.productsService.getProduct();
    } catch (error) {
      return new NotFoundException(error.message);
    }
  }

  @Post()
  async createProduct() {
    try {
      return this.productsService.createProduct();
    } catch (error) {
      return new NotFoundException(error.message);
    }
  }

  @Patch()
  async updateProduct() {
    try {
      return this.productsService.updateProduct();
    } catch (error) {
      return new NotFoundException(error.message);
    }
  }

  @Put()
  async replaceProduct() {
    try {
      return this.productsService.updateProduct();
    } catch (error) {
      return new NotFoundException(error.message);
    }
  }

  @Delete()
  async deleteProduct() {
    try {
      return this.productsService.deleteProduct();
    } catch (error) {
      return new NotFoundException(error.message);
    }
  }
}
