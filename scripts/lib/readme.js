const fs = require('fs')
const slug = require('slug')

const readme = async(categorie, data) =>
{
  runTree(categorie, data)
}

const runTree = (categorie, lignes) =>
{
  let cat1 = ''
  let cat2 = ''
  let readmeTitre1 = `\n* [${upperCaseFirst(categorie)}](./${categorie}/README.md)\n`
  let readmeTitre2 = `# ${upperCaseFirst(categorie)}\n\n`
  let readmeTitre3 = ''
  let readmeTitre4 = ''
  let ymlTitre2 = ''

  lignes.forEach(ligne =>
  {
    const {
      'categorie 1': categorie1,
      'categorie 2': categorie2,
      'categorie 3': categorie3
    } = ligne

    if (cat1 !== categorie1)
    {
      readmeTitre1 += `  * [${categorie1}](./${categorie}/${slug(categorie1)}/README.md)\n`
      readmeTitre2 += `* [${categorie1}](./${slug(categorie1)}/README.md)\n`
      ymlTitre2 += `- title: ${categorie1}\n  path: '/${slug(categorie)}/${slug(categorie1)}'\n  icon: icon-${slug(categorie1)}\n  subtopics:\n`
      readmeTitre3 = `# ${upperCaseFirst(categorie1)}\n\n`
    }

    if (cat2 !== categorie2)
    {
      creatFile(`../data/${categorie}/${slug(categorie1)}/README.md`, readmeTitre3)
      readmeTitre2 += `  * [${categorie2}](./${slug(categorie1)}/${slug(categorie2)}/README.md)\n`
      ymlTitre2 += `    - title: ${categorie2}\n      path: '/${slug(categorie)}/${slug(categorie1)}/${slug(categorie2)}'\n`
      readmeTitre3 += `* [${categorie2}](./${slug(categorie2)}/README.md)\n`
      readmeTitre4 = ''
      readmeTitre4 += `# ${upperCaseFirst(categorie2)}\n\n`
    }

    if (!fs.existsSync(`../data/${categorie}/${slug(categorie1)}/${slug(categorie2)}/${slug(categorie3)}.md`))
    {
      readmeTitre3 += `  * ${categorie3}\n`
      readmeTitre4 += `* ${categorie3}\n`
    }
    else
    {
      readmeTitre3 += `  * [${categorie3}](./${slug(categorie2)}/${slug(categorie3)}.md)\n`
      readmeTitre4 += `* [${categorie3}](${slug(categorie3)}.md)\n`
    }

    creatFile(`../data/${categorie}/${slug(categorie1)}/${slug(categorie2)}/README.md`, readmeTitre4)

    cat1 = categorie1
    cat2 = categorie2
  })

  fs.appendFileSync('../data/README.md', readmeTitre1)
  creatFile(`../data/${categorie}/README.md`, readmeTitre2)
  creatFile(`../demo-site/src/content/${categorie}.yml`, ymlTitre2)
}

const upperCaseFirst = (str) =>
{
  return str.charAt(0).toUpperCase() + str.substring(1)
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

module.exports = readme
