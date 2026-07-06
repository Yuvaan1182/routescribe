export type Listener<T> = (payload: T) => void | Promise<void>;

export interface EventBus<TEvents> {
  emit<K extends keyof TEvents>(event: K, payload: TEvents[K]): Promise<void>;

  on<K extends keyof TEvents>(
    event: K,
    listener: Listener<TEvents[K]>,
  ): () => void;
}

export function createEventBus<TEvents>(): EventBus<TEvents> {
  const listeners = new Map<keyof TEvents, Set<Listener<any>>>();

  async function emit<K extends keyof TEvents>(
    event: K,
    payload: TEvents[K],
  ): Promise<void> {
    const handlers = listeners.get(event);

    if (!handlers) return;

    for (const handler of handlers) {
      await handler(payload);
    }
  }

  function on<K extends keyof TEvents>(
    event: K,
    listener: Listener<TEvents[K]>,
  ): () => void {
    let handlers = listeners.get(event);

    if (!handlers) {
      handlers = new Set();
      listeners.set(event, handlers);
    }

    handlers.add(listener);

    return () => {
      handlers?.delete(listener);
    };
  }

  return {
    emit,
    on,
  };
}
