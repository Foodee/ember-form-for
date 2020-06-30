import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | form-controls/ff-range', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<FormControls::FfRange />`);

    assert
      .dom('[data-test-ff-control-input]')
      .exists({ count: 1 })
      .hasAttribute('type', 'range', 'Should render a range input');
  });
});
