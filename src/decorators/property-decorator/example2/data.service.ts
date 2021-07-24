import { Data } from './data';

export class DataService {

  handleData(data: Data): any {
    console.log('the data are:');
    console.log(data);
    return { message: 'ok, I got the data' };
  }
}