import {ILocation} from "./location-model";

export interface IEvent {
  panelId:string;
  cardId:string;
  timestamp;
  accessAllowed:boolean;
  location:ILocation;
}
