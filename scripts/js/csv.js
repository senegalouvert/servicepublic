const fs = require('fs')
const fastcsv = require('fast-csv')
const scraping = require('./scraping')

const getCsv = (argv) =>
{
  const { categorie, csv, sauter, max } = argv

  const stream = readFile(csv)

  stream && fastcsv.parseStream(stream, {
    headers: [
      'web-scraper-order',
      'web-scraper-start-url',
      'categorie 1',
      'categorie 2',
      'categorie 2-href',
      'categorie 3',
      'categorie 3-href'
    ],
    skipLines: sauter,
    maxRows: max
  })
    .on('error', () => console.error('Erreur: problème d\'analyse fichier'))
    .on('data', async(data) =>
    {
      await scraping(categorie, data)
    })
    .on('end', () =>
    {
      console.log('---- Démarrage sauvegarde ----')
    })
}

const readFile = (fichier) =>
{
  // Check that the file exists locally
  if (!fs.existsSync(fichier))
  {
    console.error(`Erreur: fichier ${fichier} introuvable`)
  }
  else
  {
    return fs.createReadStream(fichier)
  }
}

module.exports = getCsv
