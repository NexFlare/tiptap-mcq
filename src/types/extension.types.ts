export interface Content {
  type: string;
  content: Array<Content>;
  attrs?: Record<string, any>;
}
