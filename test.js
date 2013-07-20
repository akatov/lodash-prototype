describe('lodash-prototype', function(){
    describe('string', function(){
        it('escape', function(){
            expect("<tag>".escape()).to.equal("&lt;tag&gt;");
        });
        it('parseInt', function(){
            expect(isNaN("abc".parseInt())).to.be(true);
            expect("1".parseInt()).to.equal(1);
            expect("15".parseInt(14)).to.equal(19);
        });
        it('template', function(){
            expect("<%= x %>".template({x:"ohai"})).to.equal("ohai");
        });
        it('unescape', function(){
            expect("&lt;".unescape()).to.equal("<");
        });
        it('uniqueId', function(){
            expect("abc".uniqueId()).to.match(/^abc/);
        });
    });
    describe('number', function(){
        it('times', function(){
            var x = 0;
            (3).times(function(){x++;});
            expect(x).to.equal(3);
            expect((3).times(function(){return "abc";}).join('')).to.equal('abcabcabc');
        });
    });
});
