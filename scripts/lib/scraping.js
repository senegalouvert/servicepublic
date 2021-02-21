const fs = require('fs')
const got = require('got')
const slug = require('slug')
const path = require('path')
const cheerio = require('cheerio')
const TurndownService = require('turndown')

const turndownService = new TurndownService()

const scraping = async(categorie, data) =>
{
  const {
    'web-scraper-order': order,
    'categorie 1': categorie1,
    'categorie 2': categorie2,
    'categorie 3': categorie3,
    'categorie 3-href': url
  } = data

  await creatFolder([categorie, categorie1, categorie2]).then(async dossier =>
  {
    const file = `${dossier}/${slug(categorie3)}.md`
    !fs.existsSync(file) && await getHtml(order, url, true).then(async markdown =>
    {
      await creatFile(file, markdown.body)

      await checkService(markdown.services)
    })
  })
}

const creatFolder = async(folders) =>
{
  return new Promise((resolve) =>
  {
    let base = '../data/'

    folders.forEach(async folder =>
    {
      base = path.join(base, slug(folder))
      !fs.existsSync(base) && await fs.mkdirSync(base)
    })
    resolve(base)
  })
}

const getHtml = async(order, url, serv) =>
{
  return new Promise((resolve) =>
  {
    got(url).then(async response =>
    {
      const $ = cheerio.load(response.body)

      // get title
      const titre = turndownService.turndown($('h1').html())

      // get #text
      const texte = turndownService.turndown($('#texte').html())

      if (serv)
      {
        // get #services
        let service = turndownService.addRule('#services', {
          filter: 'a',
          replacement: (content, _node, _options) =>
          {
            return `[${content}](../../../services/${slug(content)}.md)`
          }
        })

        service = turndownService.turndown($('#services').html())

        const services = []
        $('#services li a').each((_i, link) =>
        {
          const nom = link.children[0].data
          const lien = link.attribs.href

          services.push({ order: order, nom: nom, lien: lien })
        })
        setTimeout(resolve, 10000)
        resolve({ body: `# ${titre}\n\n${texte}\n\n${service}`, services: services })
      }
      else
      {
        setTimeout(resolve, 10000)
        resolve({ body: `# ${titre}\n\n${texte}` })
      }
    }).catch(_err =>
    {
      console.error(`Erreur code:${order} lien:${url}\n`)
      fs.appendFileSync('./logs/error.txt', `${order},${serv ? 'demarche' : 'service'},${url}\n`)
    }
    )
  })
}

const checkService = async(services) =>
{
  return new Promise((resolve) =>
  {
    services.forEach(async service =>
    {
      const file = `../data/services/${slug(service.nom)}.md`
      !fs.existsSync(file) && await getHtml(service.order, service.lien, false).then(async markdown =>
      {
        await creatFile(file, markdown.body)
      })
    })
  })
}

const creatFile = async(path, markdown) =>
{
  fs.writeFile(path, markdown, 'utf8', (err) =>
  {
    if (err)
    {
      console.error(err)
    }
  })
}

module.exports = scraping
