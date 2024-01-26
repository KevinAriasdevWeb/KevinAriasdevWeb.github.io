import { defineConfig } from 'astro/config';
import { writeFile, copy } from 'fs/promises';


import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  
   // ...
   buildOptions: {
    baseUrl: '/portfolio-dev/',
  },
  // ...
  hooks: {
    postBuild: async () => {
      await Promise.all([
        // Copia archivos estáticos
        copy('static', '.astro/public'),

        // Copia el directorio dist a la raíz del proyecto
        copy('.astro/dist', '.'),
      ]);

      // Añade un archivo CNAME si es necesario
      await writeFile('.astro/public/CNAME', 'https://kevinariasdevweb.github.io/');
    },
  },
});
