import test from 'node:test';
import assert from 'node:assert/strict';
import { DemoProject } from '../src/index.js';

test('DemoProject.displayInfo returns project metadata', () => {
  const project = new DemoProject({ apiUrl: 'https://example.test' });
  const info = project.displayInfo();

  assert.equal(info.project, 'npm-demo-project');
  assert.equal(info.version, '1.0.0');
  assert.ok(Array.isArray(info.features));
  assert.ok(info.features.includes('ES6+ support'));
});
