import { App } from 'vue';

const SpotlightPlugin = {
  install(app: App) {
    console.log('my plugin is installed!');
  }
}

export default SpotlightPlugin;