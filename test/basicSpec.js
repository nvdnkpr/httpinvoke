var httpinvoke = require('../httpinvoke-generated-commonjs');
describe('simple usage', function() {
    it('not result in an error', function() {
        var done = false;
        var err;
        runs(function() {
            httpinvoke(location.href, {
                finished: function(_err, result) {
                    err = _err;
                    done = true;
                }
            });
        }, 'finished callback should be called');
        waitsFor(function() {
            return done;
        });
        runs(function() {
            expect(err).toBe(null);
        });
    });
});