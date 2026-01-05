function add(...a) {
  return a.reduce((acc, val) => acc + val, 0);
}

export {
  add
}
