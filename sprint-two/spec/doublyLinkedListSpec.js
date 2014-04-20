var expect = chai.expect;
var assert = chai.assert;

describe("doublyLinkedList", function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = makeDoublyLinkedList();
  });

  it("should have a head and tail", function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it("should designate a new tail when new nodes are added", function(){
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it("should remove the head from the list when removeHead is called", function(){
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it("should contain a value that was added", function(){
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    assert.isTrue(doublyLinkedList.contains(4));
    assert.isTrue(doublyLinkedList.contains(5));
    assert.isFalse(doublyLinkedList.contains(6));
  });

  it("should not contain a value that was removed", function(){
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    assert.isFalse(doublyLinkedList.contains(4));
  });

  //new tests for doublyLinkedList

  it('should have method named ".addToHead"', function () {
    expect(doublyLinkedList.addToHead).to.be.a('function');
  });
  
  it('should be able to add values to head', function () {
    expect(doublyLinkedList.head).to.equal(null);
    doublyLinkedList.addToHead(4);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('after second invocation, subsequent invocations of addToHead will set "previous" to previous node', function () {
    expect(doublyLinkedList.head).to.equal(null);
    doublyLinkedList.addToHead(4);
    doublyLinkedList.addToHead(5);
    expect(doublyLinkedList.head.next.previous.value).to.equal(5);
    doublyLinkedList.addToHead(6);
    expect(doublyLinkedList.head.next.value).to.equal(5);
    expect(doublyLinkedList.head.next.next.value).to.equal(4);
    expect(doublyLinkedList.head.next.previous.value).to.equal(6);
  });

  it('should have a function "removeTail"', function () {
    expect(doublyLinkedList.removeTail).to.be.a('function');
  });

  it('should reassign tail as necessary', function () {
    doublyLinkedList.addToHead(4);
    doublyLinkedList.addToHead(5);
    doublyLinkedList.addToHead(6);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.tail.value).to.equal(5);
    assert.isFalse(doublyLinkedList.contains(4));
  });
});
