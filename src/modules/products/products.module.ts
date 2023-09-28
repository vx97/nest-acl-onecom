import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

import { Module } from '@nestjs/common';
import { ProductRepository } from './products.repository';
import { Product } from 'src/entity/product.entity';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsService, ProductRepository],
})
export class ProductsModule {}
