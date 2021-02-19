export default interface CommandInfoInterface {
   prefix: string;
   description?: string;
   category?: string; // TODO Should be enum of sorts, feel free to create
   permissions?: any // TODO should be enum of sorts, feel free to create
   // etc 
}