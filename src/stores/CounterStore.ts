import { singleton } from "tsyringe";

type Listener = () => void;

// singleton이라는 건 전역에서 하나라는 뜻
@singleton()
export default class CounterStore {
  count = 0;

  listeners = new Set<Listener>()

  increase() {
    this.count += 1;
    this.public();
  }
  decrease() {
    this.count += 1;
    this.public();
  }

  public() {
    this.listeners.forEach((listener) => listener())
  }

  addListner(listener: Listener) {
    this.listeners.add(listener)
  }

  removeListner(listener: Listener) {
    this.listeners.delete(listener)
  }
}

