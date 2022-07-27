import express from 'express';
import ReactDOM from 'react-dom/server';
import { Header } from "../shared/header";
import { indexTemplate } from "./indexTemplate";

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
   res.send(
       indexTemplate(ReactDOM.renderToString(Header())),
   )
});
const port = 3000;
app.listen(port, () => {
    console.log("server started on port: " + port);
})