const fs = require('fs');
const yaml = require('yaml');

const yamlData = fs.readFileSync('./.textlintrc.yml','utf8');
const config = yaml.parse(yamlData);
delete config.filters.allowlist
fs.writeFileSync('./.textlintrc.json', JSON.stringify(config));
