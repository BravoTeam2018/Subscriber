import {IEvent} from "./event-model";

export interface IAlert {
  severity:string;
  previousEvent:IEvent;
  currentEvent:IEvent;
  title:string;
  description:string;

  toString()

}
