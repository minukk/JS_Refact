let defaultOwner = { firstName: "jin", lastName: "minuk" };

let defaultOwnerData = { firstName: "jin", lastName: "minuk" };
export function defaultOwnerCapsule() { return defaultOwnerData; }
export function setDefaultOwner(arg) { defaultOwnerData = arg; }