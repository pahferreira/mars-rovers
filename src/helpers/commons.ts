import { TPosition, TPlateau, TNavigationRover } from 'types/rover-navigate'

export const generatePlateau = (endPlateau: string = '5 5'): TPlateau => {
  const endPlateauSplitted = endPlateau.split(' ')
  const plateau = {
    initial: {
      x: 0,
      y: 0,
    },
    end: {
      x: parseInt(endPlateauSplitted[0], 2),
      y: parseInt(endPlateauSplitted[1], 2),
    },
  }
  return plateau
}

export const generatePosition = (
  positionString: string = '0 0 N',
): TNavigationRover => {
  const positionStringSplitted = positionString.split(' ')
  const position = {
    position: {
      x: parseInt(positionStringSplitted[0], 2),
      y: parseInt(positionStringSplitted[1], 2),
    },
    facing: positionStringSplitted[2],
  }
  return position
}

export const navigate = (
  plateau: TPlateau,
  rover: TNavigationRover,
  commands: string,
): string => {
  console.log(plateau)
  console.log(rover)
  console.log(commands)

  return ''
}
