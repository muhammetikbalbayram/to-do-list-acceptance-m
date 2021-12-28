const assert = require('assert').strict;
const waitForSelector = require('../action/waitForSelector');

/**
 * Checks an input, textarea or select element's text.
 * @param {String} selector CSS selector of the element whose value you're checking.
 * @param {String} not Null when checking for equality, otherwise checking for inequality.
 * @param {String} text The value to check for.
 * @param {number} timeout The value for timeout.
 */
module.exports = async function(selector, not, text, timeout = 30) {
    await waitForSelector.call(this, selector, timeout)
    /* istanbul ignore next */  // Required otherwise code coverage evaluation fails within $eval calls
    const elementValue = await this.page.$eval(selector, el => {
        return el.textContent.toString().trim();
    });
    const expectedValue = text === undefined || text === null ? '' : text;
    assert(elementValue !== undefined, `Expected "${selector}" to have a value`);
    const msg = `Expected "${selector}" to ${!not ? 'have' : 'not have'} a value of "${expectedValue}" but actual value is "${elementValue}"`
    assert.strictEqual(elementValue === expectedValue, !not, msg);
};
