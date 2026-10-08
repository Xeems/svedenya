module.exports = {
  apps: [
    {
      name: 'sveden-app',
      script: 'node_modules/next/dist/bin/next',
      args: 'start', // Запуск в prod-режиме
      instances: 'max', // Использовать кластерный режим для всех ядер CPU
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      out_file: '/var/log/sveden-app/sveden-app-out.log',
      error_file: '/var/log/sveden-app/sveden-app-error.log',
      merge_logs: true,
    },
  ],
};
