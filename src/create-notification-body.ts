import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty() // não pode esta vazio
  @IsUUID() // não repetir
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 400)
  content: string;
  
  @IsNotEmpty()
  category: string;
}
