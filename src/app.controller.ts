import { Controller, Get } from './@nestjs/common';
// import { AppService } from './app.service';

@Controller('a')
export class AppController {
  constructor() {}

  // 客户端请求路径  --  /a/b  ['a', 'b']
  @Get('b')
  getHello(): string {
    return 'HELLOW';
  }
}
