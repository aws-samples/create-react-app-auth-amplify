import linear from './linear'
import square from './square'

export default {
  linear,
  square
}

export type SelectionType = 'add' | 'remove'

export type SelectionSchemeType = 'linear' | 'square'