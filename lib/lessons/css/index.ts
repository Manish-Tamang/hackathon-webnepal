import type { Lesson } from "../types"
import { selectors } from "./topics/selectors"
import { boxModel } from "./topics/box-model"

export const cssLessons: { [key: string]: Lesson } = {
  selectors,
  "box-model": boxModel,
}
