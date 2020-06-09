const chalk =require('chalk')
// simply blue font
console.log(chalk.blue('this is is blue text'))
// blue & bold font, red background (bg = background)
console.log(chalk.blue.bgRed.bold('Blue & Bold on Red'))
// blue font, red background
console.log(chalk.blue.bgRed('Regular Blue on Red Background'))
// combining multiple font colors
console.log(chalk.blue('Blue') + ' Default' + chalk.red('Red'))
// Underlining text
console.log(chalk.red('There is an ', chalk.underline('Error')))
// Using RGB-colors
console.log(chalk.rgb(127, 255, 0).bold('Custom green'))