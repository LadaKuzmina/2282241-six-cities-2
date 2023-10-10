import {CliCommandInterface} from './cli-command.interface.js';
import chalk from 'chalk';

export default class HelperCommand implements CliCommandInterface {
  public readonly name = '--help';

  public async execute(): Promise<void> {
    console.log(`
        Программа для подготовки данных для REST API сервера.
        Пример: cli.js --<command> [--arguments]\n`,
    chalk.bold('\tКоманды:\n'),
    chalk.yellow('\t--version:                   '), chalk.bgMagenta('# выводит номер версии\n'),
    chalk.green('\t--help:                      '), chalk.bgMagenta('# печатает этот текст\n'),
    chalk.red('\t--import <path>:             '), chalk.bgMagenta('# импортирует данные из TSV\n'),
    chalk.blue('\t--generate <n> <path> <url>  '), chalk.bgMagenta('# генерирует произвольное количество тестовых данных'));
  }
}
