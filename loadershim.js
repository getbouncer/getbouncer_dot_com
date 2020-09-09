const jest = require('jest')

global.___loader = {
  enqueue: jest.fn(),
}
