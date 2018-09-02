export const states = [
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
  'info',
].map(state => ({
  lower: state,
  upper: state.charAt(0).toUpperCase() + state.substr(1),
}))
