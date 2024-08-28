import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Cria um chunk separado para os componentes relacionados ao dashboard
          'dashboard-group': [
            '@/components/dashboard/Dashboard.vue',
            '@/components/dashboard/DashboardRodape.vue'
          ],
          // Cria outro chunk separado para componentes relacionados a vendas
          'sales-group': [
            '@/components/sales/Vendas.vue',
            '@/components/sales/Lead.vue',
            '@/components/sales/Leads.vue',
            '@/components/sales/Contratos.vue',
            '@/components/sales/VendasPadrao.vue'
          ],
          // Um chunk separado para os serviços
          'services-group': [
            '@/components/services/Servicos.vue',
            '@/components/services/Servico.vue',
            '@/components/services/Indicadores.vue',
            '@/components/services/Opcoes.vue'
          ]
        }
      }
    }
  }
})
