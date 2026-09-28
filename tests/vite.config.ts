import { defineConfig } from 'vite';

// Browser tests exercise the built bundles and import isolated helpers. Disable
// HMR so rebuilding dist or writing screenshots cannot silently reload a session.
export default defineConfig({ server: { hmr: false, watch: null } });
