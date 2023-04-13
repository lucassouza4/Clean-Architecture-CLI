import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'cacli',
  run: async (toolbox) => {
    const { print } = toolbox

    print.info('Welcome to CACLI a command interface for Clean Architecture')
  },
}

module.exports = command
