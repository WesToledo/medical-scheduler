import { Module } from '@nestjs/common';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './common/modules/user/user.module';
import { TreatmentModule } from './common/modules/treatment/treatment.module';
import { PaymentModule } from './common/modules/payment/payment.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client', 'dist'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      database: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      synchronize: true,
      entities: [__dirname + '/**/*.entity.js,.ts'],
      namingStrategy: new SnakeNamingStrategy(),
    }),
    UserModule,
    TreatmentModule,
    PaymentModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
