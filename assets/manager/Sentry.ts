import * as Sentry from "@sentry/react-native"

export const initSentry = () =>
  Sentry.init({
    dsn: process.env.SENTRY_DSN,

    tracesSampleRate: 0.3,
    // @ts-ignore
    profilesSampleRate: 0.3,
  })

export function captureApiException(error: unknown, context?: Record<string, any>) {
  if (error instanceof Error) {
    Sentry.captureException(error, {
      tags: {
        type: "api_error",
      },
      extra: {
        ...context,
      },
    })
  } else {
    Sentry.captureMessage("API Error", {
      level: "error",
      tags: {
        type: "api_error",
      },
      extra: {
        error,
        ...context,
      },
    })
  }
}
