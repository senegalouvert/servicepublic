#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const getCsv = require('./csv')

const argv = yargs(hideBin(process.argv))
  .command('backup [categorie] [csv] [sauter] [max]', 'sauvegarde des liens html en fichier md', (yargs) =>
  {
    yargs
      .positional('categorie', {
        describe: 'backup dans cette categorie'
      })
      .positional('csv', {
        describe: 'chemin du fichier csv'
      })
      .positional('sauter', {
        describe: 'sauter ligne',
        default: 1
      })
      .positional('max', {
        describe: 'maximum ligne',
        default: 10
      })
  }, (argv) =>
  {
    if (argv.verbose) console.info(`sauvegarde des liens html de "${argv.csv}" sauter ligne(s):${argv.sauter}`)
    if ((argv.categorie === 'particuliers' || argv.categorie === 'professionnels') && argv.csv) getCsv(argv)
    else console.info('Erreur de syntaxe, commande incorrecte')
  })
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Exécuter avec une journalisation détaillée'
  })
  .argv

module.exports = argv
