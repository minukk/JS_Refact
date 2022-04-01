let defaultOwnerData = { firstName: "jin", lastName: "minuk" };
export function getDefaultOwner() { return defaultOwnerData; }
export function setDefaultOwner(arg) { defaultOwnerData = arg; }

// spaceship.owner = getDefaultOwner();
// setDefaultOwner({ firstName: "min", lastName: "UK" });