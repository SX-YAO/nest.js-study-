import lc from 'cli-color';

export class Logger {
    static log(message: string, context: string = '') {
        const timestamp = new Date().toLocaleString();
        // 获取当前的进程id
        const pid = process.pid;
        // 进程 LOG
        console.log(`[${lc.green('Nest')}] ${lc.green(pid)} - ${timestamp}     ${lc.green('LOG')} [${lc.yellow(context)}] ${lc.green(message)}`)
    }
}