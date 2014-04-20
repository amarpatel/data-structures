var expect = chai.expect;
var assert = chai.assert;

describe("doublyLinkedList", function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = makeDoublyLinkedList();
  });

  it("should have a head and tail", function() {
    expect(doublyLinkedList).to.have.property('head')
    expect(doublyLinkedList).to.have.property('tail')
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
    // expect(doublyLinkedList)
  })









  // xit("should have methods named 'addToHead' and 'removeTail'", function() {
  //   expect(doublyLinkedList.addToHead).to.be.a('function');
  // });

  // xit("should designate a new head when needed", function(){
  //   doublyLinkedList.addToHead(4);
  //   expect(doublyLinkedList.head.value).to.equal(4);
  //   doublyLinkedList.addToHead(5);
  //   expect(doublyLinkedList.head.value).to.equal(5);
  // });


  // xit("should have method named 'removeTail'", function() {
  //   expect(doublyLinkedList.removeTail).to.be.a('function');
  // });

  // xit("should remove a tail when needed", function(){
  //   doublyLinkedList.addToTail(4);
  //   doublyLinkedList.addToTail(5);
  //   expect(doublyLinkedList.tail.value).to.equal(5);
  //   doublyLinkedList.addToTail(6);
  //   doublyLinkedList.removeTail();
  //   expect(doublyLinkedList.tail.value).to.equal(5);
  // });

  // xit("each node should have 'previous' property pointing to the node behind ", function(){
  //   expect(doublyLinkedList.tail.previous).to.be.an('object');
  //   expect(doublyLinkedList.head.next.next.previous).to.be.an('object');
  //   expect(doublyLinkedList.head.previous).to.be('null');
  // });
});
