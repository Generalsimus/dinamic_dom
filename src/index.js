function KD_G(REGISTER_NODE, ATTRIBUTE) {
  var register_LIST = [],
    EXIST_NODES;
  function get_NODES() {
    var node = KD_T(null, REGISTER_NODE(register));

    return (EXIST_NODES = node instanceof Array ? node : [node]);
  }
  function register() {
    var reduced = Array.prototype.reduce.call(arguments, function (o, prop) {
      var value = o[prop];

      for (var reg in register_LIST) {
        var el = register_LIST[reg];
        if (el.o == o && el.p == prop) {
          return value;
        }
      }
      register_LIST.push({ o: o, p: prop });

      var descriptor = Object.getOwnPropertyDescriptor(o, prop);

      // console.log(descriptor);
      Object.defineProperty(o, prop, {
        enumerable: true,
        configurable: true,
        get: function () {
          return value;
        },
        set: function (new_v) {
          if (descriptor.set) {
            descriptor.set(new_v);
          }
          value = new_v;
          var old_nodes = EXIST_NODES,
            new_nodes = get_NODES();
          new_nodes.forEach(function (node, index) {
            // node.Replace
          });
          // new_nodes.for;
          var s = Math.random();

          console.time("answer time" + s);
          console.log(EXIST_NODES);
          // console.log(KD_T(null, REGISTER_NODE(register)));
          // KD_T(null, REGISTER_NODE(register));
          console.timeLog("answer time" + s);
        }
      });

      return value;
    });

    return reduced;
  }
  return function (HTML_NODE) {
    return get_NODES();
  };
}
var s = { i: 0 };
setInterval(() => {
  s.i++;
}, 2500);
KD_T(document.body, [
  {
    div: KD_G((register) => {
      return register(s, "i");
    })
  },
  {
    div: KD_G((register) => {
      // return 435345345345345;
      return register(s, "i") ? "3" : "4";
    })
  }
]);

// console.log(v1[v2]);
