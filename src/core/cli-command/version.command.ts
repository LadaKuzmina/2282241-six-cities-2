import {CliCommandInterface} from './cli-command.interface.js';
import {readFileSync} from 'node:fs';
import path from 'node:path';
import chalk from 'chalk';

export default class VersionCommand implements CliCommandInterface {
  public readonly name = '--version';

  private readVersion(): string {
    const contentPageJson = readFileSync(path.resolve('./package.json'), 'utf-8');
    const content = JSON.parse(contentPageJson);
    return content.version;
  }

  public async execute(): Promise<void> {
    const version = this.readVersion();
    console.log(chalk.blue.bold(version));
  }
}
