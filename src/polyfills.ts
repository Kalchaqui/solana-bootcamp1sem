import { Buffer } from "buffer";
import * as process from "process";
import { buffer } from "stream/consumers";

(window as any).global = window;
(window as any).global.buffer = buffer;
(window as any).process = process;
