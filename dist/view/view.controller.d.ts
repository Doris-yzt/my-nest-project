import { ViewService } from './view.service';
export declare class ViewController {
    private readonly viewService;
    constructor(viewService: ViewService);
    getView(): string;
}
