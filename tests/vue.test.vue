<!-- ❌: Wrong tag order (should be template, script, style) -->
<style scoped>
.btn {
  padding: 10px;
}
</style>

<template>
  <!-- ✅: singleline-html-element-content-newline is off -->
  <div>Single line content</div>

  <!-- ❌: More than 4 attributes on single line -->
  <button type="button" class="btn" id="test" data-value="1" @click="handleClick">Too many</button>

  <!-- ✅: Multiple attributes on single line (max 4) -->
  <button type="button" class="btn" id="test" @click="handleClick">Click</button>

  <!-- ✅: Multiline with 1 attribute per line -->
  <button
    type="button"
    class="btn"
    id="test"
    data-value="1"
    @click="handleClick">
    Multiline
  </button>

  <!-- ❌: html-closing-bracket-newline -->
  <button
    type="button"
    class="btn"
  >
    Bad closing bracket
  </button>

  <!-- ✅: Closing bracket on same line -->
  <button
    type="button"
    class="btn">
    Good closing bracket
  </button>

  <!-- ❌: Component name should be multi-word (but rule is off) -->
  <!-- This would normally error but vue/multi-word-component-names is off -->
</template>


<script setup lang="ts">
// =============================================================================
// TypeScript in Vue - All base config rules apply
// =============================================================================

// ❌: double quotes
const message = "hello world";

// ✅: single quotes
const greeting = 'hello';

// ❌: var instead of const/let
var constlet = 0;

// ✅: const
const name = 'Test Component';

// ❌: no semicolon
const value = 123

// ✅: with semicolon
const other = 456;

// ❌: any type
const data: any = {};

// ✅: proper typing
const typed: { name: string } = { name: 'test' };

// ❌: unnecessary parens on arrow function
const mapper = [1, 2, 3].map((x) => x * 2);

// ✅: no parens needed for single param
const mapper2 = [1, 2, 3].map(x => x * 2);

// ❌: object without spaces
const obj = {foo: 'bar'};

// ✅: object with spaces
const obj2 = { foo: 'bar' };

// Vue-specific function
const handleClick = () => {
  console.log('clicked');
};

// ❌: snake_case variable
const user_name = 'John';

// ✅: camelCase variable
const userName = 'John';

// Props with TypeScript
interface Props {
  title: string;
  count?: number;
}

const props = defineProps<Props>();

// ❌: unused variable (should error unless in rest siblings)
const { title, count } = props;

// ✅: used variable
console.log(title);

// Emits
const emit = defineEmits<{
  update: [value: string];
  click: [];
}>();

// Reactive state
import { ref, computed } from 'vue';

const counter = ref(0);

// ❌: prefer template literal
const fullMessage = 'Hello' + ' ' + name;

// ✅: template literal
const fullMessage2 = `Hello ${name}`;

// Computed
const doubled = computed(() => counter.value * 2);

// ❌: no-shadow
const shadowTest = 'outer';
function testShadow() {
  const shadowTest = 'inner'; // ❌
  return shadowTest;
}

// ✅: no shadow
const noShadow = 'outer';
function testNoShadow() {
  const different = 'inner';
  return different;
}

// ❌: boolean literal compare
if (counter.value === 0) { // This is OK - comparing to number
  console.log('zero');
}

const isActive = ref(true);
if (isActive.value === true) { // ❌: unnecessary boolean compare
  console.log('active');
}

// ✅: direct boolean use
if (isActive.value) {
  console.log('active');
}
</script>
