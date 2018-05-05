export class SearchResult<T>{

  //#region Properties

  /*
  * Records returned from api endpoint.
  * */
  public records: T;

  /*
  * Total records number.
  * */
  public total: number;

  //#endregion
}
