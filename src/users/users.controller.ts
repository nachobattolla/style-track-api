import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { ValidationPipe } from '@nestjs/common';
import {User} from "./users.entity";
import {CreateUserDto} from "./dto/CreateUserDto";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id: number): Promise<User> {
        return this.usersService.findOne(+id);
    }

    @Post()
    create(@Body(new ValidationPipe()) createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.create(createUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.usersService.remove(+id);
    }
}