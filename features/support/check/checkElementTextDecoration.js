const assert = require('assert').strict;

module.exports = async function checkElementTextDecoration(selector, not, expectedTextDecoration) {
    const textDecoration = await this.page.evaluate((selector) => {
        const res = document.body.querySelector(selector)
        return window.getComputedStyle(res)['text-decoration']
    }, selector);
    const msg = `Expected "${selector}" to ${!not ? 'have' : 'not have'} a value of "${expectedTextDecoration}" but actual value is "${textDecoration}"`
    assert.strictEqual(textDecoration === expectedTextDecoration, !not, msg);
}
