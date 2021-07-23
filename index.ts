import { A } from './src/decorators/class-decorator/example2/class-level';
import express from 'express';

function register(...Fns: (new () => any)[]) {
  Fns.forEach(Fn => {
    const fn = new Fn();
    const { _controller: { url: controllerUrl, secure }, _posts: posts } = Fn as any;
    // if(secure) { app.use(controllerUrl, secureMiddleware); } // add authorization logic to endpoint
    (posts || []).forEach((e: { name: string, url: string }) => {
      app.post(`${controllerUrl}/${e.url}`, (req, res) => fn[e.name].call(fn, req, res));
    });
  });
}

const app = express();
app.use(express.json());
app.get('/', (_, res) => res.send('server is ok'));
register(A);

app.listen(3000, () => console.log('server listening at http://localhost:3000'));