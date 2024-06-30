import 'reflect-metadata';
import { formatData, IControllerOptions } from './util';

export function Controller(url?: string | IControllerOptions ): ClassDecorator {
    const option: IControllerOptions = {} as IControllerOptions;
    option.prefix = formatData(url);
    return (target: Function) => {
        Reflect.defineMetadata('prefix', option.prefix || '', target);
    }
}