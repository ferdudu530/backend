import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { REQUEST } from '@nestjs/core';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService, @Inject(REQUEST) private request: Request) {}

    @Post()
    create(@Body() CreateUserDto: CreateUserDto) {
        return this.UsersService.create(CreateUserDto);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.UsersService.remove(id);
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() UpdateUserDto: UpdateUserDto) {
        return this.UsersService.update(id, UpdateUserDto);
    }
    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.UsersService.findOne('' + id);
    }
    @Get()
    findAll() {
        // const { limit, offset } = paginationQuery;
        return this.UsersService.findAll();
    }
}
