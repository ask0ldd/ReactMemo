import { THexAddress } from "./THexAddress.ts";

export function isHexAddress(str: unknown): str is THexAddress {
    return typeof str === 'string' && /^0x[0-9A-Fa-f]+$/.test(str);
}