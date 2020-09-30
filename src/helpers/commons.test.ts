import { TNavigationRover, TPlateau } from 'types/rover-navigate'
import {
  generatePlateau,
  generatePosition,
  rotate,
  move,
  navigate,
} from './commons'

describe('Common Help Functions Test', () => {
  describe('Generate Plateau Function', () => {
    it('generate Plateau Object from ending position', () => {
      const plateau = generatePlateau('6 6')
      expect(plateau).toEqual({
        initial: {
          x: 0,
          y: 0,
        },
        end: {
          x: 6,
          y: 6,
        },
      })
    })
    it('generate Plateau Object from no ending position', () => {
      const plateau = generatePlateau()
      expect(plateau).toEqual({
        initial: {
          x: 0,
          y: 0,
        },
        end: {
          x: 5,
          y: 5,
        },
      })
    })
  })
  describe('Generate Position Function', () => {
    it('Generate TNavigationRover from initial position', () => {
      const navigationRover = generatePosition('1 1 S')
      expect(navigationRover).toEqual({
        facing: 'S',
        commands: '',
        position: {
          x: 1,
          y: 1,
        },
      })
    })
    it('Generate TNavigationRover from no initial position', () => {
      const navigationRover = generatePosition()
      expect(navigationRover).toEqual({
        facing: 'N',
        commands: '',
        position: {
          x: 0,
          y: 0,
        },
      })
    })
    it('Generate TNavigationRover from empty string on initial position', () => {
      const navigationRover = generatePosition('')
      expect(navigationRover).toEqual({
        facing: 'N',
        commands: '',
        position: {
          x: 0,
          y: 0,
        },
      })
    })
  })
  describe('Rotate Functions', () => {
    const rover: TNavigationRover = {
      position: {
        x: 0,
        y: 0,
      },
      facing: 'N',
      commands: '',
    }
    it('Rotate to Left', () => {
      const roverAfterRotate: TNavigationRover = rotate('L', rover)
      expect(roverAfterRotate.facing).toEqual('W')
    })
    it('Rotate to Right', () => {
      const roverAfterRotate: TNavigationRover = rotate('R', rover)
      expect(roverAfterRotate.facing).toEqual('E')
    })
    it('Dont Rotate', () => {
      const roverAfterRotate: TNavigationRover = rotate('', rover)
      expect(roverAfterRotate.facing).toEqual('N')
    })
  })
  describe('Move Functions', () => {
    const plateau: TPlateau = {
      initial: {
        x: 0,
        y: 0,
      },
      end: {
        x: 5,
        y: 5,
      },
    }
    it('Move to North', () => {
      const roverFacingNorth: TNavigationRover = {
        position: {
          x: 0,
          y: 0,
        },
        facing: 'N',
        commands: '',
      }
      const roverAfterMove: TNavigationRover = move(plateau, roverFacingNorth)
      expect(roverAfterMove.position).toEqual({ x: 0, y: 1 })
      expect(roverAfterMove.facing).toEqual('N')
    })
    it('Move to South', () => {
      const roverFacingSouth: TNavigationRover = {
        position: {
          x: 2,
          y: 5,
        },
        facing: 'S',
        commands: '',
      }
      const roverAfterMove: TNavigationRover = move(plateau, roverFacingSouth)
      expect(roverAfterMove.position).toEqual({ x: 2, y: 4 })
      expect(roverAfterMove.facing).toEqual('S')
    })
    it('Move to West', () => {
      const roverFacingWest: TNavigationRover = {
        position: {
          x: 2,
          y: 5,
        },
        facing: 'W',
        commands: '',
      }
      const roverAfterMove: TNavigationRover = move(plateau, roverFacingWest)
      expect(roverAfterMove.position).toEqual({ x: 1, y: 5 })
      expect(roverAfterMove.facing).toEqual('W')
    })
    it('Move to East', () => {
      const roverFacingEast: TNavigationRover = {
        position: {
          x: 2,
          y: 5,
        },
        facing: 'E',
        commands: '',
      }
      const roverAfterMove: TNavigationRover = move(plateau, roverFacingEast)
      expect(roverAfterMove.position).toEqual({ x: 3, y: 5 })
      expect(roverAfterMove.facing).toEqual('E')
    })
  })
  describe('Navigate Function', () => {
    const plateau: TPlateau = {
      initial: {
        x: 0,
        y: 0,
      },
      end: {
        x: 5,
        y: 5,
      },
    }
    it('Rover in Position 1 2 N with commands LMLMLMLMM should be at 1 3 N', () => {
      const rover: TNavigationRover = {
        ...generatePosition('1 2 N'),
        commands: 'LMLMLMLMM',
      }
      const finalPositionRoverInString: string = navigate(plateau, rover)
      expect(finalPositionRoverInString).toEqual('1 3 N')
    })
    it('Rover in Position 3 3 E with commands MMRMMRMRRM should be at 1 3 N', () => {
      const rover: TNavigationRover = {
        ...generatePosition('3 3 E'),
        commands: 'MMRMMRMRRM',
      }
      const finalPositionRoverInString: string = navigate(plateau, rover)
      expect(finalPositionRoverInString).toEqual('5 1 E')
    })
  })
})
