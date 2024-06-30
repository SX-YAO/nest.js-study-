interface IControllerOptions {
    prefix: string;
}

const isString = (value: unknown): Boolean => {
    return typeof value === 'string';
}

const formatData = (url?: string | IControllerOptions): string => {
    if (!url) {
        return '/'
    };
    const optUrl = isString(url) ? url : (url as IControllerOptions).prefix;
    const reg = /\//g;
    if (reg.test(optUrl as string)) {
        return optUrl as string;
    }
    return '/' + optUrl;
}

export { isString, formatData, IControllerOptions };