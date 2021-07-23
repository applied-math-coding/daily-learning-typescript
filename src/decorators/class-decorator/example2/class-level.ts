import { body } from './body.decorator';
import { Data } from './data';
import { post } from './post.decorator';
import { response } from './response.decorator';
import { controller } from './controller.decorator';
import { Response } from 'express';

@controller({ url: '/target-controller', secure: false })
export class A {

  @post('target-method')
  targetMethod(@body() data: Data, @response() res: Response) {
    console.log('the data are:');
    console.log(data);
    res.json({ message: 'ok, I got the data' });
  }
}