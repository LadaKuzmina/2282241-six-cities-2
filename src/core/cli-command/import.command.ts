import {CliCommandInterface} from './cli-command.interface.js';
import TsvFileReader from '../file-reader/tsv-file-reader.js';
import chalk from 'chalk';

export default class ImportCommand implements CliCommandInterface {
  public readonly name = '--import';

  public execute(filename: string): void {
    const fileReader = new TsvFileReader(filename.trim());
    try {
      fileReader.read();
      console.log(fileReader.toArray());
    } catch (err) {
      if (!(err instanceof Error)) {
        throw err;
      }
      console.log(`Не удалось импортировать данные из файла: '${chalk.red(err.message)}'`);
    }
  }
}
