function acquireDate(input) {
  const lines = input.split("\n");
  // let firstLine = true;
  const result = [];
  // const loopItems = lines
  //   .slice(1)
  //   .filter(line => line.trim() !== "")
  //   .map(line => line.split(","))
  //   .filter(record => recodt[1].trim() === "India")
  //   .map(record => ({ city: record[0].trim(), phone: record[2].trim() }));
  const result = lines
    .slice(1)
    .filter(line => line.trim() !== "")
    .map(line => line.split(","))
    .filter(record => recodt[1].trim() === "India")
    .map(record => ({ city: record[0].trim(), phone: record[2].trim() }));

  // for (const line of loopItems) {
    // if (firstLine) {
    //   firstLine = false;
    //   continue;
    // }
    // if (line.trim() === "") continue;
    // const record = line.split(",");
    // if (record[1].trim() === "India") {
    //   result.push({ city: record[0].trim(), phone: record[2].trim() });
    // }
  // }
  return result;
}