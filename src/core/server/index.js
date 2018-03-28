import Hapi from 'hapi';
import Log from 'log';

import * as db from './db';
import * as users from './user';

const log = new Log('debug');
db.init();

const server = Hapi.server({
  port: 4000,
  host: 'localhost'
});

const init = async () => {
  await server.start();
  log.info(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  log.error(err);
  process.exit(1);
});

init();
log.info(`Server running at: ${server.info.uri}`);
