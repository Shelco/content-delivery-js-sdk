/**
 * Enum describing in which mode the Content Delivery API
 * is being used.
 */
export enum ContextMode {
  /**
   * Default mode, also known as view mode.
   */
  Default = 'DEFAULT',

  /**
   * Preview mode in the CMS shell.
   */
  Preview = 'PREVIEW',

  /**
   * Edit mode in the CMS shell.
   */
  Edit = 'EDIT',
}

/**
 * Interface describing the content language,
 * also known as branch.
 */
export interface Language {
  /**
   * URL to this specific language branch
   * of the content.
   */
  link: string,

  /**
   * Displayable name of the language branch.
   */
  displayName: string,

  /**
   * Identifier of the language branch.
   */
  name: string,
}

/**
 * Interface describing a reference to a
 * content item.
 */
export interface ContentLink {
  /**
   * Universally unique identifier of the content.
   */
  guidValue: string,

  /**
   * URL to the content.
   */
  url: string,

  /**
   * Language branch of the content.
   */
  language: Language,

  /**
   * The content item if it was expanded.
   */
  expanded?: ContentData,
}

/**
 * Interface describing content.
 */
export interface ContentData {
  /**
   * Reference to the content.
   */
  contentLink: ContentLink,

  /**
   * Reference to the parent content.
   */
  parentLink: ContentLink,

  /**
   * Content type.
   */
  contentType: Array<string>,

  /**
   * Language branch of the content.
   */
  language: Language,

  /**
   * Language branches this content exists in.
   */
  existingLanguages: Array<Language>,

  /**
   * Date this content was created.
   */
  created: Date,

  /**
   * Date this content was changed.
   */
  changed: Date,

  /**
   * Date this content was saved.
   */
  saved: Date,

  /**
   * Date this content was published.
   */
  startPublish: Date,

  /**
   * Name of the content.
   */
  name: string,
}

/**
 * Inteface describing a category
 */
export interface Category {
  /**
   * Identifier of the category.
   */
  id: number,

  /**
   * Identifier of the category.
   */
  name: string,

  /**
   * Description of the category.
   */
  description: string,
}

/**
 * Interface describing page content.
 */
export interface PageData extends ContentData {
  /**
   * Url to the page.
   */
  url: string,

  /**
   * Last segment in the URL.
   */
  routeSegment: string,

  /**
   * List of categories.
   */
  category: Array<Category>,
}