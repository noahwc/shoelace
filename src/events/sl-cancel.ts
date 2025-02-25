type SlCancelEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'sl-cancel': SlCancelEvent;
  }
}

export default SlCancelEvent;
