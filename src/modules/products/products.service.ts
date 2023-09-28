import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: ProductRepository,
  ) {}

  async getProduct() {
    try {
      return {
        message: 'Products send successfully',
      };
    } catch (error) {
      throw new InternalServerErrorException('Oops! Something went wrong.');
    }
  }

  async createProduct() {
    try {
      return {
        message: 'Product added successfully',
      };
    } catch (error) {
      throw new InternalServerErrorException('Oops! Something went wrong.');
    }
  }

  async updateProduct() {
    try {
      return {
        message: 'Product updated successfully',
      };
    } catch (error) {
      throw new InternalServerErrorException('Oops! Something went wrong.');
    }
  }

  async deleteProduct() {
    try {
      return {
        message: 'Product deleted successfully',
      };
    } catch (error) {
      throw new InternalServerErrorException('Oops! Something went wrong.');
    }
  }
}
