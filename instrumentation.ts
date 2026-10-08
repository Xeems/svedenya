import { type Instrumentation } from 'next'


export const onRequestError: Instrumentation.onRequestError = async(
  error: unknown,
  request: { path: string; method: string; headers: any }
) => {
  console.error(JSON.stringify({
    app: 'next-sveden',
    timestamp: new Date().toISOString(),
    level: 'ERROR',
    type: 'server-error',
    message: error instanceof Error ? error.message : String(error),
    stack: error instanceof Error ? error.stack : undefined,
    url: request.path,
    method: request.method,
    //@ts-ignore
    ip: request.ip || request.headers.get('x-forwarded-for')?.split(',')[0] || ''
  }));
}