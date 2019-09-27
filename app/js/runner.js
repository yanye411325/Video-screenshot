function run(gen) {
        var args = [].slice.call(arguments, 1);
        var it = gen.apply(this, args);
        return Promise.resolve().then(function handleNext(val) {
            var next = it.next(val);

            return (function handleResult(next) {
                if(next.done) {
                    return next.value;
                }else {
                    return Promise.resolve(next.value).then(handleNext, function handleError(err) {
                        return Promise.resolve(it.throw(err)).then(handleResult);
                    });
                }
            })(next);
        });
    }