function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let old = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    old--;
  }
  return old;
}

module.exports = { getAge };
