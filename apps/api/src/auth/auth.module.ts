import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from 'src/common/modules/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';

@Module({
  providers: [AuthService, UserService],
  imports: [TypeOrmModule.forFeature([User])],
})
export class AuthModule {}
