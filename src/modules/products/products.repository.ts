import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Product } from 'src/entity/product.entity';
import { DataSource, Repository } from 'typeorm';

// user.repository.ts
@Injectable()
export class ProductRepository extends Repository<Product> {
  constructor(private dataSource: DataSource) {
    super(Product, dataSource.createEntityManager());
  }

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
