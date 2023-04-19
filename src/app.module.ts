import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import TypeOrmConfigImport from './config/TypeOrmConfig';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MarketModule } from './markets/market.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    TypeOrmConfigImport,
    UsersModule,
    AuthModule,
    MarketModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
