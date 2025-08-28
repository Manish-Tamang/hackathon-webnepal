import type { Lesson } from "../types"
import { utilityFirst } from "./topics/utility-first"
import { layout } from "./topics/layout"

export const tailwindLessons: { [key: string]: Lesson } = {
  "utility-first": utilityFirst,
  layout,
}
