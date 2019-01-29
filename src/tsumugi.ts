/**
 * @fileoverview The starting point of Tsumugi
 * @author Georgi Slaveykov
 * @license GPL-3.0
 */

import { TsumugiClient } from './bot/client/TsumugiClient';
import { BOT_TOKEN } from './bot/util/config';

const client = new TsumugiClient();

client.start(BOT_TOKEN);
