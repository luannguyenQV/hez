"use strict";

var _index = require("./index");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

test("action dispatch handling should work properly", _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var store, fromCallback, toCallback, toResult, FromAction, ToAction;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ToAction = function ToAction() {
            return toResult;
          };

          FromAction = function FromAction(state) {
            fromCallback(state);
            state.on(ToAction, toCallback);
          };

          store = (0, _index.createStore)();
          fromCallback = jest.fn(function () {});
          toCallback = jest.fn(function () {});
          toResult = {};
          _context.next = 8;
          return store.dispatch(FromAction);

        case 8:
          _context.next = 10;
          return store.dispatch(ToAction);

        case 10:

          expect(fromCallback.mock.calls.length).toBe(1);
          expect(toCallback.mock.calls.length).toBe(1);
          expect(toCallback.mock.calls[0][1]).toBe(toResult);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, undefined);
})));

test("should call reducer properly", function () {
  var initialState = {
    todos: []
  };
  var state = (0, _index.createState)(initialState);
  var reducerCallback = jest.fn(function (value) {
    return value;
  });

  state.reduce({
    todos: reducerCallback
  });

  expect(reducerCallback.mock.calls.length).toBe(1);
  expect(reducerCallback.mock.calls[0][0]).toBe(initialState.todos);
  expect(reducerCallback.mock.calls[0][1]).toBe(state.get());
});
//# sourceMappingURL=index.test.js.map