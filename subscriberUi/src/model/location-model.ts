import {ICoOrdinates} from "./co-ordinates-model";

export interface ILocation {
  coordinates:ICoOrdinates;
  altitude;
  relativeLocation:string;
}
