const DEFAULT_TEST = /^on(\w)/;
function createEventListenerApplyProperty({
  test = DEFAULT_TEST,
  normalize = defaultNormalize,
  eventListenerOptions
} = {}) {
  const normalizedTest = typeof test === 'function' ? test : prop => test.test(prop);
  return ({
    type,
    element,
    property,
    value
  }) => {
    if (!normalizedTest(property, type)) return;
    const options = eventListenerOptions == null || typeof eventListenerOptions === 'object' ? eventListenerOptions : eventListenerOptions(property, type);
    element.addEventListener(normalize(property, type), value, options);
  };
}
const withEventListeners = createEventListenerApplyProperty(); // Normalizes events by dropping the `on` and lowercasing the first
// letter of the event: `onEvent` => `event`

function defaultNormalize(prop) {
  return `${prop[2].toLowerCase()}${prop.slice(3)}`;
}

export { createEventListenerApplyProperty, withEventListeners };
