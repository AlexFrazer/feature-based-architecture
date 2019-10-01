export function loggingMiddleware() {
  return store => next => action => {
    switch (action.type) {
      case 'DID_THING': {
        alert('I did it');
      }
    }
    next(action);
  };
}
