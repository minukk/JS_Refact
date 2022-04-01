let defaultOnwerData = { firstName: "jin", lastName: "minuk" };
export function defaultOwner() { return Object.assign({}, defaultOwnerData); }
export function setDefaultOwner(arg)  { defaultOwnerData = arg; }