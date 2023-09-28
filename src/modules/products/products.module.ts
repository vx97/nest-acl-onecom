import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

import { Module } from '@nestjs/common';
import { ProductRepository } from './products.repository';
import { Product } from 'src/entity/product.entity';
import { JwtStrategy } from 'src/strategy/jwt.strategy';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsService, ProductRepository, JwtStrategy],
})
export class ProductsModule {}
