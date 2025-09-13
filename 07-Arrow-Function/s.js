let length = 5;
function callback () {
    console.log(this.length);

}
const object = {
    length: 5,
    method (callback) {
        callback();
    },
};
object.method(callback, 1, 2);