export const RECEIVE = 'RECEIVE';

export function receivedData (items) {
  return {
    type: RECEIVE,
    items,
  }
}