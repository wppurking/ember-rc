import { markDown } from '../../../helpers/mark-down';
import { module, test } from 'qunit';

//TODO 无法成功测试 helper 方法, 因为都无法正常的引入带有外部依赖的 app/helper
module('Unit | Helper | mark down');

// Replace this with your real tests.
test('it works', function(assert) {
  var result = markDown(42);
  assert.ok(result);
});
