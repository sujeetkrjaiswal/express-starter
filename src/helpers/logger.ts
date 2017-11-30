import chalk from 'chalk'

export const log = (...args) => {
  console.log(...args)
}

export const logInfo = (...args) => {
  log(chalk.bgBlueBright(...args))
}

export const logError = (...args) => {
  log(chalk.red(...args))
}

export const logSuccess = (...args) => {
  log(chalk.green(...args))
}


