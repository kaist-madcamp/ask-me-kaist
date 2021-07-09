import {
  Body,
  Controller,
  Get,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { JoinInput, JoinOutput } from './dto/join.dto';
import { LoginInput, LoginOutput } from './dto/login.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/join')
  async join(@Body() joinInput: JoinInput): Promise<JoinOutput> {
    return this.usersService.join(joinInput);
  }

  @Post('/login')
  async login(@Body() loginInput: LoginInput): Promise<LoginOutput> {
    return this.usersService.login(loginInput);
  }

  @Get('/me')
  async me(@Req() req: Request) {
    return req.headers['user'];
  }
}
