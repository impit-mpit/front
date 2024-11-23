import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import TanStackRouterRspack from '@tanstack/router-plugin/rspack';

export default defineConfig({
  plugins: [pluginReact(),
    {
      setup: (api) => {
        api.onAfterBuild(({ isFirstCompile, stats }) => {
          if (typeof Bun !== 'undefined') {
            process.exit(process.exitCode || 0);            
          }
        });
      },
    },
  ],
  html: {
    template: "./index.html"
  },
  tools:{
    rspack:{
      plugins:[TanStackRouterRspack()]
    }
  }
});
