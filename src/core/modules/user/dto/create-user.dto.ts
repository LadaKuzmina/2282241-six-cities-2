import {CreateUserMessages} from './create-user-messages.js';
import {IsEmail, IsString, Length} from 'class-validator';
import {UserEnum} from '../../../../types/user.enum';

export default class CreateUserDto {
  @IsEmail({}, { message: CreateUserMessages.email.invalidFormat })
  public email!: string;

  @IsString({ message: CreateUserMessages.avatarPath.invalidFormat })
  public avatar?: string;

  @IsString({ message: CreateUserMessages.name.invalidFormat })
  @Length(1, 15, { message: CreateUserMessages.name.lengthField })
  public name!: string;

  @IsString({ message: CreateUserMessages.userType.invalidFormat })
  public userType!: UserEnum;

  @IsString({ message: CreateUserMessages.password.invalidFormat })
  @Length(6, 12, { message: CreateUserMessages.password.lengthField })
  public password!: string;
}
