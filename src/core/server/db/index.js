import mongoose from 'mongoose';
import Log from 'log';

import { APP_DB } from '../../lib';

const log = new Log('debug');


export function init() {
  const connectionStr = `mongodb://localhost/${APP_DB}`;
  log.debug(`Connecting to database: ${connectionStr}`);
  mongoose.connect(connectionStr);
}
