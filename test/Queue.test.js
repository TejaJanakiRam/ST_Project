import Queue from "../src/Queue.js";
import { expect } from "chai";

describe("Testing the Queue DS", () => {
  const queue = new Queue();

  it("Testing enqueue method", () => {
    expect(queue.enqueue(1)).to.equal(1);
    expect(queue.enqueue(2)).to.equal(2);
    expect(queue.enqueue(8)).to.equal(3);
    expect(queue.enqueue(9)).to.equal(4);
  });

  it("Testing length after enqueue", () => {
    expect(queue.length).to.equal(4);
  });

  it("Testing peekFirst & peekLast methods", () => {
    expect(queue.peekFirst()).to.equal(1);
    expect(queue.peekLast()).to.equal(9);
  });

  it("Testing toArray method", () => {
    expect(queue.toArray()).to.eql([1, 2, 8, 9]);
  });

  it("Testing dequeue method", () => {
    expect(queue.dequeue()).to.equal(1);
    expect(queue.dequeue()).to.equal(2);
  });

  it("Testing length after dequeue", () => {
    expect(queue.length).to.equal(2);
  });

  it("Testing isEmpty method", () => {
    const queue = new Queue();
    expect(queue.isEmpty()).to.equal(true);

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(8);
    queue.enqueue(9);

    expect(queue.isEmpty()).to.equal(false);
  });
});
