// Scan and export all *.vue components under this directory,
// So the caller can globally register them for convenience, because they
// will be used very frequently. Components are registered using the
// KebabCase (hello-world) version of their file name but prefixed an prefix defined in `config.js`.

import kebabCase from 'lodash/kebabCase'

// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
  // Look for files in the current directory
  '.',
  // Do not look in subdirectories
  true,
  // Only include .vue files
  /.+\.vue$/
)

// For each matching file name...
const components = requireComponent.keys().reduce((map, fileName) => {
  // Get the component config
  const componentConfig = requireComponent(fileName)
  // Get the KebabCase version of the component name
  let name = kebabCase(
    // Adding the app's prefix to all component names.
    fileName
      // Remove the `./SubFolderName/` or `./` from the beginning
      // The filename likes
      //  ./HelloWorld.vue
      //  ./SubFolderName/HelloWorld.vue
      .replace(/^.+\//, '')
      // Remove the file extension from the end
      .replace(/\.\w+$/, '')
  )

  if (map[name]) console.warn(`Register duplicate component with name '${name}'.`)

  map[name] = componentConfig.default || componentConfig
  return map
}, {})
export default components
