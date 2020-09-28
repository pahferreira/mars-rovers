import { StackNavigationProp } from '@react-navigation/stack'
import { IRover } from './rovers'

export enum EScreens {
  HOME = 'HOME_SCREEN',
  RESULTS = 'RESULTS_SCREEN',
}

type RootStackParamList = {
  [EScreens.HOME]: { rovers?: Array<IRover> }
  [EScreens.RESULTS]: { rovers: Array<IRover> }
}

export type TRoute = {
  params: {
    rovers: Array<IRover>
  }
}

export type HomeScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  EScreens.HOME
>

export type ResultsScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  EScreens.RESULTS
>
