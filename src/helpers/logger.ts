import chalk from 'chalk'

export const log = (...args: string[]) => {
  console.log('Log : ', ...args)
}

export const logInfo = (...args: string[]) => {
  log(chalk.bgBlueBright('Info : ', ...args))
}

export const logError = (...args: string[]) => {
  log(chalk.red('Error : ', ...args))
}

export const logSuccess = (...args: string[]) => {
  log(chalk.green('Success : ', ...args))
}


