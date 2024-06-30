import 'reflect-metadata';

import express, { Express } from 'express';
import { Logger } from './index'

export class NestApplication {
    // 启动服务器, 私有化一个 Express 实例
    private readonly app: Express = express();
    constructor(protected readonly module) {}
    // 初始化配置工作
    async init() {
        // 取出模块中的所有控制器，然后做好路由配置
        const controllers = Reflect.getMetadata('controllers', this.module) || [];
        Logger.log(`AppModule ${controllers}`, '模块解析')
    }
    async listen(port) {
        await this.init();
        // 调用 express 实例的 listen 方法
        this.app.listen(port, () => {
            Logger.log(`监听${port}`, '监听开启')
        })
    }
}