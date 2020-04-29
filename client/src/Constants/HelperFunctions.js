export function compare(a, b) {
  const nameA = a.Name.toUpperCase();
  const nameB = b.Name.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}
export function compareDescending(a, b) {
  const nameA = a.Name.toUpperCase();
  const nameB = b.Name.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison * -1;
}