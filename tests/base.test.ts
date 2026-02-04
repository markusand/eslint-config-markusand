/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Comprehensive test file for eslint-config-markusand v2.0.0
 * Each rule shows FAIL example followed by PASS example
 */

// =============================================================================
// CODE STYLE RULES
// =============================================================================

// --- max-len: 100 characters ---
const result = Array.from({ length: 50 }, (_, i) => i + 1).filter(n => n % 3 === 0).map(n => n * n).reduce((a, b) => a + b, 0); // ❌: max-len
const shortLine = 'this is under 100 characters'; // ✅
const longUrl = 'https://very-long-url.com/with/many/segments/that/exceeds/one-hundred-characters/but/should/be/ignored'; // ✅: ignoreUrls
const longString = 'this is a very long string literal that exceeds one hundred characters but should be ignored by the rule'; // ✅: ignoreStrings
const longComment = ''; // This is a very long comment that exceeds one hundred characters but should be ignored by ignoreTrailingComments // ✅

// --- quotes: single ---
const doubleQuoted = "should be single quotes"; // ❌
const singleQuoted = 'correct single quotes'; // ✅
const escapedQuote = "it's okay to use double quotes to avoid escaping"; // ✅: avoidEscape

// --- semi: always ---
const missingSemi = 'missing semicolon' // ❌
const hasSemi = 'has semicolon'; // ✅

// --- comma-dangle: always-multiline ---
const objectNoDangle = {
  foo: 1,
  bar: 2 // ❌
};
const multiLineObject = {
  foo: 1,
  bar: 2,
}; // ✅
const singleLineObject = { foo: 1, bar: 2 }; // ✅: single line doesn't need trailing comma

const arrayNoDangle = [
  1,
  2,
  3 // ❌
];
const multiLineArray = [
  1,
  2,
  3,
]; // ✅
const singleLineArray = [1, 2, 3]; // ✅

// --- indent: 2 spaces ---
function badIndent() {
    return true; // ❌
}
function goodIndent() {
  return true; // ✅
}

// --- object-curly-spacing: always ---
const noSpaces = {foo: 'bar'}; // ❌
const withSpaces = { foo: 'bar' }; // ✅

// --- array-bracket-spacing: never ---
const arraySpaces = [ 1, 2, 3 ]; // ❌
const arrayNoSpaces = [1, 2, 3]; // ✅

// --- brace-style: 1tbs ---
function badBraceStyle()
{ // ❌
  return true;
}
function goodBraceStyle() { // ✅
  return true;
}

// --- camelcase ---
const snake_case = 'should be camelCase'; // ❌
const camelCase = 'correct naming'; // ✅

// --- no-underscore-dangle (except after this) ---
const _leadingUnderscore = 'bad'; // ❌
const noUnderscore = 'good'; // ✅

class UnderscoreTest {
  private _privateField = 'ok'; // ✅: after this
  method() {
    this._privateField = 'still ok'; // ✅: after this
  }
}

// =============================================================================
// ES6+ RULES
// =============================================================================

// --- no-var ---
var oldStyle = 'should use let or const'; // ❌
const modernConst = 'good'; // ✅
function testModernLet() {
  let modernLet = 'initial';
  modernLet = 'mutated';
  return modernLet; // ✅
}

// --- prefer-const ---
let shouldBeConst = 'never reassigned'; // ❌
const properConst = 'never changes'; // ✅
function testMutableLet() {
  let mutableLet = 'initial';
  mutableLet = 'changed'; // ✅
  return mutableLet;
}

// --- arrow-parens: as-needed ---
const unnecessaryParens = [1, 2, 3].map((x) => x * 2); // ❌
const noParensNeeded = [1, 2, 3].map(x => x * 2); // ✅: single param
const parensNeeded = [1, 2, 3].map((x, y) => x + y); // ✅: multiple params

// --- arrow-body-style: as-needed ---
const unnecessaryBlock = [1, 2, 3].map(x => { return x * 2; }); // ❌
const implicitReturn = [1, 2, 3].map(x => x * 2); // ✅
const explicitReturn = [1, 2, 3].map(x => {
  const doubled = x * 2;
  return doubled;
}); // ✅: explicit needed for multi-statement block

// --- object-shorthand: always ---
const name = 'test';
const noShorthand = { name: name }; // ❌
const shorthand = { name }; // ✅

// --- prefer-template ---
const concatenation = 'hello world' + name; // ❌
const templateString = `hello ${'world'}`; // ✅

// --- template-curly-spacing ---
const templateSpaces = `hello ${ 'world' }`; // ❌
const templateNoSpaces = `hello ${'world'}`; // ✅

// --- object-curly-newline: consistent ---
const inconsistent = { a: 1,
  b: 2 }; // ❌
const consistent1 = { a: 1, b: 2 }; // ✅
const consistent2 = {
  a: 1,
  b: 2,
}; // ✅

// --- prefer-rest-params ---
function oldArguments() {
  return Array.from(arguments); // ❌
}
function restParams(...args: number[]) {
  return args; // ✅
}

// --- prefer-spread ---
const arr1 = [1, 2, 3];
const max1 = Math.max.apply(Math, arr1); // ❌
const max2 = Math.max(...arr1); // ✅

// --- prefer-arrow-callback ---
const mappedBad = [1, 2, 3].map(function(x) { return x * 2; }); // ❌
const mappedGood = [1, 2, 3].map(x => x * 2); // ✅

// =============================================================================
// BEST PRACTICES
// =============================================================================

// --- eqeqeq ---
const looseEqualityBad = (x: number) => x == 5; // ❌
const strictEquality = (x: number) => x === 5; // ✅
function nullCheck(value: unknown) {
  if (value == null) { // ✅: null exception
    return 'null or undefined';
  }
  return value;
}

// --- dot-notation ---
const testObj = { foo: 'bar' };
const bracketNotation = testObj['foo']; // ❌
const dotNotation = testObj.foo; // ✅
const key = 'dynamicKey';
const testObjForComputed = { dynamicKey: 'value' };
const computed = testObjForComputed[key]; // ✅: not a literal

// --- no-eval ---
const dangerous = eval('2 + 2'); // ❌
const safe = 2 + 2; // ✅

// =============================================================================
// CUSTOM RULES
// =============================================================================

// --- no-nested-ternary: off ---
const nestedTernary = (condition: boolean, otherCondition: boolean) =>
  condition ? 'yes' : otherCondition ? 'maybe' : 'no'; // ✅: rule is off

// --- no-param-reassign: props false ---
function reassignParam(obj: { value: number }) {
  obj = { value: 999 }; // ❌
  return obj;
}
function mutateParam(obj: { value: number }) {
  obj.value = 10; // ✅: props mutation allowed
  return obj;
}

// --- lines-between-class-members: exceptAfterSingleLine ---
class LinesTest {
  shortProp = 1;
  anotherShort = 2; // ✅: single line exception

  longMethod() {
    return 'long';
  }
  anotherMethod() { // ❌
    return 'another';
  }
}

class LinesTestGood {
  shortProp = 1;
  anotherShort = 2; // ✅

  longMethod() {
    return 'long';
  }

  anotherMethod() { // ✅: blank line after multi-line
    return 'another';
  }
}

// =============================================================================
// TYPESCRIPT RULES
// =============================================================================

// --- TypeScript: no-shadow (base rule disabled) ---
const shadowTest = 'outer';
function shadowFunc() {
  const shadowTest = 'inner'; // ❌
  return shadowTest;
}
const noShadow = 'outer';
function noShadowFunc() {
  const different = 'inner'; // ✅
  return different;
}

// --- TypeScript: no-explicit-any (warn) ---
const anyType: any = 'should avoid'; // ❌
const specificType: string = 'better'; // ✅
const unknownType: unknown = 'also good'; // ✅

// --- TypeScript: no-unnecessary-boolean-literal-compare ---
const boolValue = true;
if (boolValue === true) { // ❌
  console.log('unnecessary');
}
if (boolValue) { // ✅
  console.log('direct use');
}

// --- TypeScript: no-unused-vars with ignoreRestSiblings ---
/* eslint-enable @typescript-eslint/no-unused-vars */
const { used, unused1 } = { used: 1, unused1: 2 }; // ❌
const { used2, ...rest } = { used2: 1, unused2: 2, unused3: 3 }; // ✅: ignoreRestSiblings
console.log(rest);
/* eslint-disable @typescript-eslint/no-unused-vars */

// --- TypeScript: no-non-null-assertion: off ---
const nullable: string | null = 'test';
const assertNonNull = nullable!; // ✅: rule is off

// =============================================================================
// IMPORT RULES (import-x)
// =============================================================================

// --- import-x/no-absolute-path: off ---
// Would normally error in strict configs but is disabled here

// --- import-x/prefer-default-export: off ---
export const namedExport = 'ok'; // ✅: prefer-default-export is off

// --- import-x/extensions ---
// import { something } from './module'; // ✅: .ts never required
// import { other } from './module.ts'; // ❌: shouldn't specify .ts

// --- import-x/no-extraneous-dependencies ---
// import { describe } from 'vitest'; // ✅: devDependencies allowed

// =============================================================================
// EXPORTS
// =============================================================================

export {
  shortLine,
  singleQuoted,
  hasSemi,
  withSpaces,
  modernConst,
  testModernLet,
  testMutableLet,
  UnderscoreTest,
  LinesTestGood // ❌
};
