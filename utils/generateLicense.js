const fs = require('fs')

const licenses = {
  mit: {
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    file: './utils/licenses/mit.txt'
  },
  apache: {
    badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    file: './utils/licenses/apache_2_0.txt'
  },
  boost: {
    badge: '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    file: './utils/licenses/boost_software_license_1_0.txt'
  },
  gnu: {
    badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    file: './utils/licenses/gnu_gpl_3_0.txt'
  },
  mozilla: {
    badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    file: './utils/licenses/mozilla_public_license_2_0.txt'
  }
}

const getLicense = (license) => {
  if (license === 'The MIT License') {
    return licenses.mit
  } else if (license === 'Apache 2.0 License') {
    return licenses.apache
  } else if (license === 'Boost Software License 1.0') {
    return licenses.boost
  } else if (license === 'GNU GPL v3') {
    return licenses.gnu
  } else if (license === 'Mozilla Public License 2.0') {
    return licenses.mozilla
  }
}

const writeLicenseFile = (data) => {
  let license = getLicense(data.license)
  fs.readFile(license.file, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      fs.writeFile('./results/LICENSE.txt', data)
    }
  })
}

module.exports = { getLicense, writeLicenseFile }
