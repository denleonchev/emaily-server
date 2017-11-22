export default (emailsString) => {
  const emails = emailsString.split(',')
  for (let email of emails) {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      return false
    }
  }
  return true
}
