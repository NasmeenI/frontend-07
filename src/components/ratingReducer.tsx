type RatingState = Map<string, number>

type RatingAction =
  | { type: "SET_RATING"; venueName: string; rating: number }
  | { type: "REMOVE_VENUE"; venueName: string }

export function ratingReducer(state: RatingState, action: RatingAction): RatingState {
  const newState = new Map(state)

  switch (action.type) {
    case "SET_RATING":
      newState.set(action.venueName, action.rating)
      return newState
    case "REMOVE_VENUE":
      newState.delete(action.venueName)
      return newState
    default:
      return state
  }
}

export const initialRatingState: RatingState = new Map([
  ["The Bloom Pavilion", 0],
  ["Spark Space", 0],
  ["The Grand Table", 0],
])
