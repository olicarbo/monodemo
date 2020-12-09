import * as express from "express";
import add from '@monodemo/common'

const addAndMultiply = (a: number, b:number, c:number) => {
    return add(a, b) * c ;
}

const app = express()
app.get('/', (_req:express.Request, res:express.Response) => {
    res.send(`Result: ${addAndMultiply(1, 2, 3)}`)
})
  
app.listen(3000, () => {
    console.log('Listening at http://localhost:3000')
})

export default addAndMultiply;
