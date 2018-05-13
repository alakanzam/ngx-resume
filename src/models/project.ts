import {Range} from 'models/range';

export class Project {

  //#region Properties

  public name: string;

  public time: Range<number>;

  public company: string;

  public description: string;

  public roles: Array<string>;

  public responsibilities: Array<string>;

  public technologies: Array<string>;

  //#endregion

}
