import * as Logger from './utils/logger';

Logger.warn('[logger warn]');

export default function Main(...params) {
  Logger.info(...params);
}