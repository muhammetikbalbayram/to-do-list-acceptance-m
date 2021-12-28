const assert = require('assert').strict;

/**
 * Checks if an element is visible.
 * @param {String} selector CSS selector of the element to check for.
 * @param {String} not String "not" to indicate that the element should not be visible.
 */
module.exports = async function(selector, not) {
    const elem = await this.page.$(selector);
    assert.strictEqual(elem !== null, !!not, `Expected "${selector}" to ${!!not ? 'exist' : 'not exist'}`);
}
