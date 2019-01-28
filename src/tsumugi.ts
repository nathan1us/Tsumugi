import { TsumugiClient } from './bot/client/TsumugiClient';
import { BOT_TOKEN } from './util/config';

const client = new TsumugiClient();

client.start(BOT_TOKEN);
