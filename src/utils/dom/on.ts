
type event = (target: Window | HTMLElement, eventType: string, cb: Function) => void;

const on: event = (function (): event {
  return function (
    target: Window | HTMLElement, eventType: string, cb: EventHandlerNonNull,
  ) {
    target.addEventListener(eventType, cb);
  };
}());

export default on;
