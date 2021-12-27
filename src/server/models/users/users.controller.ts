import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  Render,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserResp, UsersResponse } from './serializers/user.serializer';
import { BanUserDto } from './dto/ban-user.dto';
import { AddRoleDto } from './dto/add-role.dto';
import { JwtAuthGuard } from '../../authentication/jwt-auth.guard';
import { toObject } from '../../common/helpers/toTsObject.helper';

@ApiTags('Users')
// @UseGuards(JwtAuthGuard)
@Controller('/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Получение всех пользователей' })
  @ApiResponse({ status: 200, type: [UserResp] })
  @Get()
  @Render('users')
  async index() {
    console.log('users');
    return {};
  }
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/getUsers')
  async getAll() {
    const users = await this.usersService.getAll();
    const rsp = new UsersResponse();
    rsp.users = await toObject(users);
    console.log('getAll ----', users);
    return rsp;
  }
  @ApiOperation({ summary: 'Получение конкретного пользователя по username' })
  @ApiResponse({ status: 200, type: [UserResp] })
  @ApiParam({
    name: 'username',
    type: String,
    description: 'username пользователя',
  })
  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':username')
  async getOne(@Param() { username }) {
    console.log('usernames');
    const user = await this.usersService.getUserByUsername(username);
    return new UserResp(await toObject(user));
  }

  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiResponse({ status: 200, type: UserResp })
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('/create')
  async create(@Body() userDto: CreateUserDto) {
    const user = await this.usersService.createUser(userDto);
    return new UserResp(await toObject(user));
  }

  @ApiOperation({ summary: 'Блок пользователя' })
  @ApiResponse({ status: 200, type: [UserResp] })
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('/ban')
  async banUser(@Body() banUserDto: BanUserDto) {
    const user = await this.usersService.banUser(banUserDto);
    return new UserResp(await toObject(user));
  }

  @ApiOperation({ summary: 'Добавление роли пользвателю.  ' })
  @ApiResponse({ status: 200, type: [UserResp] })
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('/addRole')
  async addRole(@Body() addRoleDto: AddRoleDto) {
    const user = await this.usersService.addRole(addRoleDto);

    return new UserResp(await toObject(user));
  }
}
