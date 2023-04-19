import { Market } from 'src/markets/entities/market.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @Column({ name: 'image_url' })
  imageUrl: string;

  @ManyToOne(() => Market, (market) => market.products)
  market: Market;
}
