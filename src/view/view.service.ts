import { Injectable } from '@nestjs/common';

@Injectable()
export class ViewService {
  getView(): string {
    return 'access to view!';
  }
}
