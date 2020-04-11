function toInitials(name) {
  return name.replace(/([a-z])[a-z]+/gi, '$1.')
}