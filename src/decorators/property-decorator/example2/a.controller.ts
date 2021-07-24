import { body } from './body.decorator';
import { Data } from './data';
import { post } from './post.decorator';
import { response } from './response.decorator';
import { controller } from './controller.decorator';
import { Response } from 'express';
import { DataService } from './data.service';
import { inject } from '../example2/inject.decorator';

@controller({ url: '/target-controller', secure: false })
export class A {

  @inject(DataService)
  private dataService: DataService;

  @post('target-method')
  targetMethod(@body() data: Data, @response() res: Response) {
    res.json(this.dataService.handleData(data));
  }
}