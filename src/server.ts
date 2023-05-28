import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const port = 3000;
const app: express.Application = express();
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Project 2')
})

app.listen(port, () => {
    console.log(`App list port: ${port}`);
})