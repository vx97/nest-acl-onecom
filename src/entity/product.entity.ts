import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('product')
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'product_id' })
  productId: number;

  @Column()
  name: string;
}
