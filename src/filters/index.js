
// Scan and export all filters in *.js file under this directory,
// So the caller can globally register them for convenience, because they
// will be used very frequently. Filters are registered using the
// PascalCase (HelloWorld) version of their function name but prefixed an prefix defined in `config.js`.
// https://webpack.js.org/guides/dependency-management/#require-context
const requireFilter = require.context(
  // Look for files in the current directory
  '.',
  // Do not look in subdirectories
  true,
  // Only include .js files
  /.+\.js$/
)

// For each matching file name...
export default requireFilter.keys().reduce((map, fileName) => {
  // Ingore this one (myself)
  if (fileName !== './index.js') {
    // Get the filter config
    const filters = requireFilter(fileName)
    Object.keys(filters.default || filters).forEach(name => {
      map[name] = filters[name]
    })
  }
  return map
}, {})
