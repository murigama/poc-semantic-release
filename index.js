#!/usr/bin/env node

/**
 * POC Semantic Release - Exemplo de pacote para publicação automática no npm
 * 
 * Este é um exemplo simples de como usar semantic-release para automatizar
 * a publicação de pacotes no npm através do GitHub Actions.
 */

function main() {
  console.log('🚀 POC Semantic Release - Pacote publicado automaticamente!');
  console.log('📦 Versão:', require('./package.json').version);
  console.log('📅 Data:', new Date().toISOString());
  console.log('✨ Este pacote foi publicado usando semantic-release!');
  console.log('teste')
}

// Executa a função principal se o arquivo for executado diretamente
if (require.main === module) {
  main();
}

// Exporta a função para uso em outros módulos
module.exports = { main };
