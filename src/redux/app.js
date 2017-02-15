// ------------------------------------
// Constants
// ------------------------------------
export const ON_ROUTE_CHANGE = 'ON_ROUTE_CHANGE';

// ------------------------------------
// Actions
// ------------------------------------
function onRouteChange(currentRoute) {
  return {
    type: ON_ROUTE_CHANGE,
    payload: {
      currentRoute
    }
  }
}


export const actions = {
  onRouteChange,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ON_ROUTE_CHANGE]: (state, action) => ({...state, ...action.payload }),
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  currentRoute: 'home',
}
export default function blogReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
