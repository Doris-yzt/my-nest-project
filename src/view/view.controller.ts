import { Controller, Get } from '@nestjs/common';
import { ViewService } from './view.service';

@Controller('view')
export class ViewController {
  constructor(private readonly viewService: ViewService) {}
  @Get()
  getView(): string {
    return this.viewService.getView();
  }
}
