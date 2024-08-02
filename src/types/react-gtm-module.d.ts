declare module 'react-gtm-module' {
  interface TagManagerArgs {
    gtmId: string;
    events?: Record<string, any>;
    dataLayer?: Record<string, any>;}

  class TagManager {
    static initialize(args: TagManagerArgs): void;
    static dataLayer(data: Record<string, any>): void;}

  export default TagManager;
}