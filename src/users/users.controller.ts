import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,

} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(
    // @Body('email') email: string,
    // @Body('password') password: string,
    // @Body('name') name: string,
    @Body() hailong: CreateUserDto,
  ) {
    //req.body
    return this.usersService.create(hailong);
  }


  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id')
    id: string,
  ) {
    // const id: string = req.params.id;
    return this.usersService.findOne(id);
  }

  @Patch()
  update(@Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
