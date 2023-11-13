import { v4 as uuid } from 'uuid'

import { LabelText } from '@resources/LabelText'
import { NoteItem } from '@/types'


export const getShortUuid = (uuid: string) => {
  return uuid.substr(0, 6)
}

export const getNoteTitle = (text: string): string => {
  // Remove whitespace from both ends
  // Get the first n characters
  // Remove # from the title in the case of using markdown headers in your title
  const noteText = text.trim().match(/[^#]{1,45}/)

  // Get the first line of text after any newlines
  // In the future, this should break on a full word
  return noteText ? noteText[0].trim().split(/\r?\n/)[0] : LabelText.NEW_NOTE
}


export const getActiveNoteFromShortUuid = (notes: NoteItem[], shortUuid: string) => {
  const uuidWithoutHash = shortUuid.replace('{{', '').replace('}}', '')

  return notes.find((note) => note.id.startsWith(uuidWithoutHash))
}