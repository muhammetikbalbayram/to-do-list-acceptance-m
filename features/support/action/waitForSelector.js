module.exports = async function(selector) {
    await this.page.waitForSelector(selector);
};
