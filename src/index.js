function KD_G(REGISTER_NODE, ATTRIBUTE) {
  var register_LIST = [],
    EXIST_NODES;
  function get_NODES() {
    var REGISTER_VALUE = REGISTER_NODE(register);

    return (EXIST_NODES = KD_T(
      null,
      REGISTER_VALUE instanceof Array
        ? REGISTER_VALUE.length
          ? REGISTER_VALUE
          : [""]
        : [REGISTER_VALUE]
    ));
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

          function Replace_nodes() {
            var old_nodes = EXIST_NODES,
              new_nodes = get_NODES();
            old_nodes.forEach(function (node, index) {
              var new_node = new_nodes[index];
              if (new_node) {
                node.Replace(new_node);
              } else {
                node.Remove();
              }
            });
          }

          // if (new_nodes.length > old_nodes.length) {
          //   for (var i = old_nodes.length; i < new_nodes.length; i++) {}
          // }

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
var s = { i: [0, 2, 45, 4] };
setInterval(() => {
  s.i = [];
}, 1000);
setInterval(() => {
  s.i = ["4"];
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
