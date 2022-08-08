enum actionTypes {
  CARD_IMAGE,
  CARD,
  SHUFFLE_CARD,
  CHOICE_ONE,
  CHOICE_TWO,
  RESET_TURN,
  DISABLED,
  NEW_GAME,
}

export interface InitialState {
  cardImages: CardAPI[]
  cards: Card[]
  turns: number
  choiceOne: Card | null
  choiceTwo: Card | null
  disabled: boolean
  newGame: boolean
}

interface CardAPI {
  img: string,
  matched: boolean
}

interface Card {
  img: string,
  matched: boolean
  id: number
}

export type actions = actionCardImage | actionShuffleCard | actionCard | actionChoiceOne | actionChoiceTwo | actionResetTurn | actionDisable | actionsNewGame

interface actionCardImage {
  type: actionTypes.CARD_IMAGE
  payload: CardAPI[]
}

interface actionShuffleCard {
  type: actionTypes.SHUFFLE_CARD
  payload: Card[]
}

interface actionCard {
  type: actionTypes.CARD
}

interface actionChoiceOne {
  type: actionTypes.CHOICE_ONE
  payload: Card
}

interface actionChoiceTwo {
  type: actionTypes.CHOICE_TWO
  payload: Card
}

interface actionResetTurn {
  type: actionTypes.RESET_TURN
}

interface actionDisable {
  type: actionTypes.DISABLED
}

interface actionsNewGame {
  type: actionTypes.NEW_GAME
}