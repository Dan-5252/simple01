//words

function l(x) {
  console.log(x);
}
l("hi");
const doer = () => 5;
l(doer());

class rr {
  constructor(x) {
    this.v = x;
  }
  write() {
    l(this.v);
  }
  forYou(x) {
    return x("banana");
  }
}

const cheese = new rr("toy");

l(cheese.v);
cheese.write();
cheese.forYou(l);
