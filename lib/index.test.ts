import { describe, it, expect } from "vitest";
import { LIB_CONTENT } from "./index";

describe('lib/index.ts', () => {
  it('should have LIB_CONTENT', () => {
    expect(LIB_CONTENT).toBe('typescript-lib-template');
  });
})