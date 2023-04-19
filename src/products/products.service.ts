import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import instanceMapper from 'src/common/utils/instanceMapper';
import { JwtService } from '@nestjs/jwt';
import { Token } from 'src/auth/intities/token.entity';

@Injectable()
export class ProductsService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(Product) private productsRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto, userTokenData: Token) {
    const newProduct = await this.productsRepository.save(
      instanceMapper(new Product(), {
        ...createProductDto,
        marketId: userTokenData.marketId,
      }),
    );

    return { data: newProduct, msg: 'Product created' };
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
