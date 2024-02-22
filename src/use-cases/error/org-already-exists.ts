export class OrgAlreadyExistsError extends Error {
  constructor() {
    super('Organization alrealdy exists')
  }
}
