export const VIEW = 'VIEW';

export function setView(view) {
  return {
    type: VIEW,
    view
  }
}