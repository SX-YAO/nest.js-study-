import 'reflect-metadata';

export function Get(url: string): MethodDecorator {
    /**
     * 函数装饰器
     * target 类原型
     * propertyKey 方法名
     * descriptor  方法名的属性描述器(descriptor.value 就是原函数)
     */
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        Reflect.defineMetadata('path', url, descriptor.value);
        Reflect.defineMetadata('method', 'GET', descriptor.value);
    }
}