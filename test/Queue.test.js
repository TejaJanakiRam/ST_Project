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
    const q = new Queue();
    expect(q.isEmpty()).to.equal(true);
    expect(q.dequeue.bind(q)).to.throw("Empty");
    expect(q.peekFirst.bind(q)).to.throw("Empty");
    expect(q.peekLast.bind(q)).to.throw("Empty");
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(8);
    q.enqueue(9);

    expect(q.isEmpty()).to.equal(false);
  });
});
