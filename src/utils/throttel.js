const throttle = (func, delay, inThrottle) => {
  
  return function(event) {
    if(!inThrottle.current) {
      func(event);
      inThrottle.current = true;
      setTimeout(() => {
        inThrottle.current = false;
      }, delay);
    }
  }
}

export default throttle;