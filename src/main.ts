import 'dotenv/config';
import * as express from 'express';
import { Request, Response } from 'express';

import { MS_EXPRESS_PORT } from './contants';

const app = express();

app.get('/', (req: Request, res: Response) => {
	res.send({
		message: 'Application',
	});
});

app.listen(MS_EXPRESS_PORT, () => {
	console.log('http://localhost:' + MS_EXPRESS_PORT);
});
