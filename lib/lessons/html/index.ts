import type { Lesson } from "../types";
import { introduction } from "./topics/introduction";
import { anatomy } from "./topics/anatomy";
import { structure } from "./topics/structure";
import { contentModels } from "./topics/contentModels";
import { headings } from "./topics/headings";
import { lists } from "./topics/lists";
import { entities } from "./topics/entities";
import { links } from "./topics/link";
import { images } from "./topics/images";
import { forms } from "./topics/forms";
import { tables } from "./topics/tables";
import { semantics } from "./topics/semantics";

export const htmlLessons: { [key: string]: Lesson } = {
  introduction,
  "anatomy-tag": anatomy,
  "document-structure": structure,
  "content-models": contentModels,
  "heading-elements": headings,
  "html-lists": lists,
  "character-entities": entities,
  "html-links": links,
  "html-images": images,
  "html-forms": forms,
  "html-tables": tables,
  "semantic-elements": semantics,
};
