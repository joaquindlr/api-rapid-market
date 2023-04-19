import { TypeOrmModule } from '@nestjs/typeorm';
import { Market } from 'src/market/entities/market.entity';
import { User } from 'src/users/entities/user.entity';

const TypeOrmConfigImport = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'admin',
  database: 'rapid_market',
  entities: [User, Market],
  synchronize: true,
  autoLoadEntities: true,
});

export default TypeOrmConfigImport;
