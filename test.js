var expect = require("chai").expect;
var hello = require('./hello');

describe('hello', function() {
	it('Should say Hello to name given as a parameter', function() {
		expect(hello.greet('Brandon')).to.eql("Hello" + " " + "Brandon");
	});
	it('Should not return an empty string', function() {
		expect(hello.greet('')).to.not.be.empty();
	});
	it('Should respond to its methods', function() {
		expect(hello).itself.to.respondTo('greet');
	});
	it('Should show the given parameter as string', function() {
		expect(hello.greet('Brandon')).to.have.string('Brandon');
	});
});