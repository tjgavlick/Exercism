'use strict';

function LinkedList() {
    this.list = Object.create(null);
    this.head = undefined;
    this.tail = undefined;
}

LinkedList.prototype.nodeRecord = function (data, prevNode, nextNode) {
    this.list[data] = {
        prev: prevNode || undefined,
        next: nextNode || undefined
    };
};

LinkedList.prototype.push = function (val) {
    if (this.tail) {
        this.list[this.tail].next = val;
    }
    this.nodeRecord(val, this.tail);
    this.tail = val;
    if (!this.head) {
        this.head = val;
    }
};

LinkedList.prototype.unshift = function (val) {
    if (this.head) {
        this.list[this.head].prev = val;
    }
    this.nodeRecord(val, undefined, this.head);
    this.head = val;
    if (!this.tail) {
        this.tail = val;
    }
};

LinkedList.prototype.pop = function () {
    if (!this.tail) {
        return undefined;
    }
    var tmp = this.tail;
    if (this.list[this.tail].prev) {
        this.tail = this.list[this.tail].prev;
        this.list[this.tail].next = undefined;
    }
    delete this.list[tmp];
    return tmp;
};

LinkedList.prototype.shift = function () {
    if (!this.head) {
        return undefined;
    }
    var tmp = this.head;
    if (this.list[this.head].next) {
        this.head = this.list[this.head].next;
        this.list[this.head].prev = undefined;
    }
    delete this.list[tmp];
    return tmp;
};

LinkedList.prototype.count = function () {
    return Object.keys(this.list).length;
};

LinkedList.prototype.delete = function (val) {
    var mendNext = this.list[val].next,
        mendPrev = this.list[val].prev;
    delete this.list[val];
    if (mendPrev) {
        this.list[mendPrev].next = mendNext;
    }
    if (mendNext) {
        this.list[mendNext].prev = mendPrev;
    }
};

module.exports = LinkedList;