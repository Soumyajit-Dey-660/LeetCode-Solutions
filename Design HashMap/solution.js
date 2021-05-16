/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {
    this.myMap = [];
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    let found = false;
    for (let i = 0; i < this.myMap.length; i++) {
        if (this.myMap[i][0] === key) {
            found = true;
            this.myMap[i][1] = value;
            break;
        }
    }
    if (!found) this.myMap.push([key, value]);
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    for (const val of this.myMap) {
        if (val[0] === key) return val[1];
    }
    return -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    for (let i = 0; i < this.myMap.length; i++) {
        if (this.myMap[i][0] === key) {
            // this.myMap = this.myMap.slice(0, i-1) + this.myMap.slice(i+1);
            this.myMap[i] = [-1, -1];
            break;
        }
    }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */