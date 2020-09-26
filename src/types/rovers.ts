export interface IRover {
  id: number
  position: string
}

export interface IRoverBuilder extends IRover {
  commands: string
}
