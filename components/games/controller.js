const hello = async (req, res, next) => {
  res.status(200).json()
}

module.exports = {
  hello
}