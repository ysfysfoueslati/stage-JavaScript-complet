function withDefault(obj, initial) {
  return new Proxy(obj, {
    get(target, prop) {
      if (prop !== 'toJSON' && !Reflect.has(target, prop)) {
        Reflect.set(target, prop, structuredClone(initial))
      }
      return Reflect.get(...arguments)
    }
  })
}

const countNames = withDefault({
  'Jane': 1
}, 0)

countNames['John']++
countNames['John']++
countNames['Jane']++
countNames['John']++

console.log({...countNames})