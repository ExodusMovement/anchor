import { createHash } from "create-hash";

export function hash(data: string): string {
  return createHash('sha256').update(data).digest('hex')
}
