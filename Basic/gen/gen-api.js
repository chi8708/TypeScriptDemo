const { generateApi } = require('swagger-typescript-api')
const path = require('path')
// const fs = require('fs')

const apis = [
  {
    output: path.resolve(__dirname, './temp/admin'),
    url: 'http://localhost:8010/admin/swagger/admin/swagger.json',
  },
]

apis?.forEach((api, index) => {
  setTimeout(() => {
    generateApi({
      output: api.output,
      templates: path.resolve(__dirname, './templates'),
      //url: api.url,
      input: path.resolve(process.cwd(), './swagger.json'),
      httpClientType: 'axios',
      modular: true,
      cleanOutput: false,
      //moduleNameIndex: 2, // 0 api, 1 api htt-client data-contracts, 2 apis htt-client data-contracts
      moduleNameFirstTag: true, //apis htt-client data-contracts
      unwrapResponseData: true,
      generateUnionEnums: true,
      //singleHttpClient: true,
      defaultResponseType: 'AxiosResponse',
      hooks: {
        onFormatTypeName: (typeName, rawTypeName, schemaType) => {
        },
      }
    })
      .then((r) => {
        files.forEach(({ content, name }) => {
          console.log(name);
          fs.writeFile(path, content);
        });
      })
      .catch((e) => console.error(e))
  }, index * 1500)
})
