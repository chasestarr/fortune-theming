export const getCustomProperty = name => {
  const styles = getComputedStyle(document.documentElement)
  return styles.getPropertyValue(name)
}

export const setCustomProperty = (name, value) =>
  document.documentElement.style.setProperty(name, value)
