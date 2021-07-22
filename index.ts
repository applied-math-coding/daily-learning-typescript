import express from 'express';
import { A } from './src/decorators/parameter-decorator/example4/parameter-level';

const app = express();
app.use(express.json());

const a = new A();
app.get('/', (_, res) => res.send('server is ok'));
app.post('/target-method', (req, res) => (a.targetMethod as any).call(a, req, res));
app.listen(3000, () => console.log('server listening at http://localhost:3000'));

new A();