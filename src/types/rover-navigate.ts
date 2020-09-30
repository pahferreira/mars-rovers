export type TPosition = {
  x: number
  y: number
}

export type TPlateau = {
  initial: TPosition
  end: TPosition
}

export type TNavigationRover = {
  position: TPosition
  facing: string
}
