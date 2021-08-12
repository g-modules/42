/* global describe, test, expect */
import { answer } from "../../src/base.js";

describe( "answer():", () => {
	const result = answer();
	const predefined = 42;
	test( "should return a number", () => expect( result ).toBeNumber() );
	test( "should be 42", () => expect( result ).toBe( predefined ) );
});
