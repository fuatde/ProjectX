import { v4 as uuid } from 'uuid'

export const getShortUuid = (uuid: string) => {
  return uuid.substr(0, 6)
}