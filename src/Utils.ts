import getConfig from './config';

export function getHostname(): string {
  const config = getConfig();
  const { host, port, protocol } = config.app;
  let hostname = `${protocol}://${host}`;
  if (config.mode !== 'production') {
    hostname += `:${port}`;
  }

  return hostname;
}
