import {CliCommandInterface} from "./cli-command.interface";

export default class HelperCommand implements CliCommandInterface {
    public readonly name = '--help';

    public async execute(): Promise<void> {
        console.log(`
        Программа для подготовки данных для REST API сервера.
        Пример: cli.js --<command> [--arguments]
        Команды:
            --version:                   # выводит номер версии
            --help:                      # печатает этот текст
            --import <path>:             # импортирует данные из TSV
            --generate <n> <path> <url>  # генерирует произвольное количество тестовых данных
        `);
    }
}
