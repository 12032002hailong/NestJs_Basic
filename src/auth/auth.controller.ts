import { Controller, Get, Post, Render, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from 'src/decorator/customize';
import { LocalAuthGuard } from './local-auth.guard';


@Controller("auth") // route /
export class AuthController {
    constructor(

        private authService: AuthService
    ) { }

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('/login')
    handleLogin(@Request() req) {
        return this.authService.login(req.user)
    }

    // @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

}
