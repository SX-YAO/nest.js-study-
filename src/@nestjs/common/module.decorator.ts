import 'reflect-metadata';

interface IModuleMetadata {
    controllers: Function[];
}
// 定义模块装饰器
export function Module(metadata: IModuleMetadata): ClassDecorator {
    // target 为类的构造函数
    return (target: Function) => {
        // 给模块类添加元数据
        // 元数据为 controllers: [AppController]
        Reflect.defineMetadata('controllers', metadata.controllers, target)
    }
}