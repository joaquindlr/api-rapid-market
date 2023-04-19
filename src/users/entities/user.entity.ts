import { Market } from 'src/markets/entities/market.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['email', 'username'])
export class User {
  constructor(userObject: {
    email: string;
    password: string;
    username: string;
    confirmationCode?: number;
    confirmationCodeExpirationDate?: string;
  }) {
    this.email = userObject?.email;
    this.password = userObject?.password;
    this.username = userObject?.username;
    this.mailConfirmed = false;
    this.confirmationCode = userObject?.confirmationCode;
    this.confirmationCodeExpirationDate =
      userObject?.confirmationCodeExpirationDate;
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  username: string;

  @Column({ nullable: true })
  mailConfirmed?: boolean;

  @Column({ nullable: true })
  confirmationCode?: number;

  @Column({ nullable: true })
  confirmationCodeExpirationDate?: string;

  @Column({ default: false })
  isAdmin: boolean;

  @Column({ default: false })
  isSeller: boolean;

  @Column({ default: true })
  isClient: boolean;

  @ManyToOne(() => Market, (market) => market.users)
  market: Market;
}
