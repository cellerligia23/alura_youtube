ALURA IMERSÃO REACT - PROJETO YOUTUBE

Ferramentas usadas

1. Node.JS (contém a ferramenta NPM)
2. React.JS (Biblioteca)
3. Next.JS (Framework)
4. Styled Components (Biblioteca de Style (CSS) do Next.js)

-Criar a pasta do projeto e dentro dela, atraves do terminal, dar os comando para configurar o Projeto:

1 - Instalar Next, React e React-Dom:

-> npm install next react react-dom

2 - Configurar os "scripts" no arquivo package.json:

scripts": {
  "dev":"next dev",
  "build":"next build",
  "start":"next start",
  "lint":"next lint"
}

3 - Criar a pasta "pages" no diretório raiz e dentro dessa página criar o arquivo "index.js". Dentro desse arquivo
criar uma função "HomePage" e exportar a mesma

"function HomePage() {
  return (
    <div>Hello Word. Welcome to Next.js!!</div>
  )
}

export default HomePage;"

4 - Instalar styled-components e criar o arquivo "next.config.js" na pasta raíz:

-> npm install styled-components

-arquivo "next.config.js"":

"/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig;"
