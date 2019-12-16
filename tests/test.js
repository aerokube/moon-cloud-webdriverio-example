const assert = require('assert');

describe('DuckDuckGo page', function () {
    it('should have the right title', async function () {
        await browser.url('https://duckduckgo.com/');
         const title = await browser.getTitle();
        assert.equal(title, 'DuckDuckGo — Privacy, simplified.');
    });
});
