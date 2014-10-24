'use strict';


function BstNode(val, left, right) {
    this.data = val || void 0;
    this.left = left || null;
    this.right = right || null;
}


BstNode.prototype.insert = function (val) {
    if (val > this.data) {
        if (this.right) {
            this.right.insert(val);
        } else {
            this.right = new BstNode(val);
        }
    } else {
        if (this.left) {
            this.left.insert(val);
        } else {
            this.left = new BstNode(val);
        }
    }
};


BstNode.prototype.each = function (fn) {
    if (this.left) {
        this.left.each(fn);
    }
    fn(this.data);
    if (this.right) {
        this.right.each(fn);
    }
};


function Bst(initialVal) {
    return new BstNode(initialVal);
}


module.exports = Bst;