import { TPlateau, TNavigationRover } from 'types/rover-navigate'
export const generatePlateau = (endPlateau: string = '5 5'): TPlateau => {
  const endPlateauSplitted = endPlateau.split(' ')
  const plateau = {
    initial: {
      x: 0,
      y: 0,
    },
    end: {
      x: parseInt(endPlateauSplitted[0], 0),
      y: parseInt(endPlateauSplitted[1], 0),
    },
  }
  return plateau
}

export const generatePosition = (
  positionString: string = '0 0 N',
  commands: string = '',
): TNavigationRover => {
  const positionStringSplitted = positionString.split(' ')
  const formatedRover = {
    position: {
      x: parseInt(positionStringSplitted[0], 0),
      y: parseInt(positionStringSplitted[1], 0),
    },
    facing: positionStringSplitted[2],
    commands,
  }
  return formatedRover
}

export const rotate = (
  command: string,
  rover: TNavigationRover,
): TNavigationRover => {
  const { facing } = rover
  const cardinals = ['W', 'N', 'E', 'S']
  const getFacingIndex = cardinals.indexOf(facing)
  if (command === 'L') {
    if (getFacingIndex === 0) {
      return {
        ...rover,
        facing: cardinals[cardinals.length - 1],
      }
    }
    return {
      ...rover,
      facing: cardinals[getFacingIndex - 1],
    }
  }
  if (command === 'R') {
    return {
      ...rover,
      facing: cardinals[(getFacingIndex + 1) % cardinals.length],
    }
  }
  return rover
}

export const move = (
  plateau: TPlateau,
  rover: TNavigationRover,
): TNavigationRover => {
  const { facing, position } = rover
  switch (facing) {
    case 'N':
      if (position.y < plateau.end.y) {
        position.y = position.y + 1
      }
      break
    case 'S':
      if (position.y > plateau.initial.y) {
        position.y = position.y - 1
      }
      break
    case 'E':
      if (position.x < plateau.end.x) {
        position.x = position.x + 1
      }
      break
    case 'W':
      if (position.x > plateau.initial.x) {
        position.x = position.x - 1
      }
      break
    default:
      break
  }
  return rover
}

export const navigate = (
  plateau: TPlateau,
  rover: TNavigationRover,
): string => {
  const commands = rover.commands.split('')
  let finalRover = rover
  commands.forEach((command) => {
    if (command === 'M') {
      finalRover = move(plateau, finalRover)
    } else {
      finalRover = rotate(command, finalRover)
    }
  })

  const finalPosition = `${finalRover.position.x} ${finalRover.position.y} ${finalRover.facing}`

  return finalPosition
}
