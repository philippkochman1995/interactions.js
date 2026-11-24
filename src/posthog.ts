import posthog from 'posthog-js';

const projectToken = import.meta.env.VITE_POSTHOG_KEY;
const apiHost = import.meta.env.VITE_POSTHOG_HOST;
const isPosthogConfigured = Boolean(projectToken && apiHost);

if (isPosthogConfigured) {
  posthog.init(projectToken, {
    api_host: apiHost,
    capture_exceptions: {
      capture_unhandled_errors: true,
      capture_unhandled_rejections: true,
      capture_console_errors: false,
    },
    logs: {
      serviceName: 'webflow-site-interactions',
      environment: import.meta.env.MODE,
    },
  });
} else if (import.meta.env.DEV) {
  const missingVariable = projectToken ? 'VITE_POSTHOG_HOST' : 'VITE_POSTHOG_KEY';
  throw new Error(
    `${missingVariable} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missingVariable} is configured`,
  );
}

export function capturePosthog(event: string, properties?: Record<string, unknown>): void {
  if (isPosthogConfigured) {
    posthog.capture(event, properties);
  }
}

export const posthogLog = {
  info(message: string, attributes?: Parameters<typeof posthog.logger.info>[1]): void {
    if (isPosthogConfigured) {
      posthog.logger.info(message, attributes);
    }
  },
};

export default posthog;
