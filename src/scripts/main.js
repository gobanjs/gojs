// Generated by CoffeeScript 1.3.3

(function(global) {
  var _GoBoard;
  _GoBoard = (function() {

    function _GoBoard(container, container_size, board_size) {
      var get_this;
      this.container = container;
      this.container_size = container_size;
      this.board_size = board_size;
      requirejs.config({
        baseUrl: "scripts",
        urlArgs: "bust=" + (new Date()).getTime(),
        paths: {
          "domReady": "helper/domReady"
        },
        shim: {
          "app": {
            exports: "_GoBoard"
          }
        }
      });
      /*
            setTimeout (->
              require ["app"], (_GoBoard)->
                get_this.lol = new _GoBoard(container, container_size, board_size)
            ), 0
      */

      get_this = this;
      require(["app"], function(_GoBoard) {
        return get_this.go_board = new _GoBoard(container, container_size, board_size);
      });
      return this.go_board;
    }

    return _GoBoard;

  })();
  if (global.GoBoard) {
    throw new Error("GoBoard has already been defined");
  } else {
    global.GoBoard = _GoBoard;
  }
})(this || (1, eval_)("this"));
