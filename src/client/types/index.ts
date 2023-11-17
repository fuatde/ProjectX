export interface NoteItem {
    id: string
    text: string
    created: string
    lastUpdated: string
    /**
     * Refers to the category UUID and not the actual name.
     */
    category?: string
    scratchpad?: boolean
    trash?: boolean
    favorite?: boolean
  }