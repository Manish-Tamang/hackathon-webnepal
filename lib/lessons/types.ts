export interface Lesson {
  title: string
  description: string
  content: string
  initialCode: {
    html?: string
    css?: string
    javascript?: string
  }
  solutionCode?: {
    html?: string
    css?: string
    javascript?: string
  }
  expectedOutput?: string
  nextLesson?: {
    topic: string
    subtopic: string
  }
  prevLesson?: {
    topic: string
    subtopic: string
  }
  subtopics?: {
    [subtopic: string]: Lesson
  }
}

export interface LessonMap {
  [topic: string]: {
    [subtopic: string]: Lesson
  }
}

export type ModuleLessons = {
  [subtopic: string]: Lesson
}

export type TopicLessons = {
  [module: string]: {
    [subtopic: string]: Lesson
  }
}
