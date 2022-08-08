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

interface InitialState {
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

type actions = actionCardImage | actionShuffleCard | actionCard | actionChoiceOne | actionChoiceTwo | actionResetTurn | actionDisable | actionsNewGame

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

export const initialState: InitialState = {
  cardImages: [],
  cards: [],
  turns: 0,
  choiceOne: null,
  choiceTwo: null,
  disabled: false,
  newGame: false,
}

export const reducer = (state = initialState, action: actions) => {
  switch (action.type) {
    case actionTypes.CARD_IMAGE:
      return {
        ...state,
        cardImages: action.payload
      }
    case actionTypes.CARD:
      return {
        ...state,
        cards: state.cards.map(card => {
          if (card.img === state.choiceOne.img) {
            return { ...card, matched: true}
          } else {
            return card
          }
        })
      }
    case actionTypes.SHUFFLE_CARD: 
      return {
        ...state,
        choiceOne: null,
        choiceTwo: null,
        cards: action.payload,
        newGame: true,
        turns: 0
      }
    case actionTypes.CHOICE_ONE:
      return {
        ...state,
        choiceOne: action.payload
      }
    case actionTypes.CHOICE_TWO:
      return {
        ...state,
        choiceTwo: action.payload
      }
    case actionTypes.RESET_TURN:
      return {
        ...state,
        choiceOne: null,
        choiceTwo: null,
        turns: state.turns + 1,
        disabled: false
      }
    case actionTypes.DISABLED:
      return {
        ...state,
        disabled: true
      }
    case actionTypes.NEW_GAME:
      return {
        ...state,
        newGame: !state.newGame
      }
  }
}