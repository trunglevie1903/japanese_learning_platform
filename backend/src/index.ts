import 'dotenv/config';
import 'module-alias/register';

import App from './app';

const app = new App(
  [],
  3456
);
app.listen();