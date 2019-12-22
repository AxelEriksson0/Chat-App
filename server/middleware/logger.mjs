import winston from 'winston'

const winstonLogger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
})

const stream = {
  write: (message, encoding) => logger.info(message.substring(0, message.lastIndexOf('\n')))
}

const log = func => (message) => func(message)

export const logger = {
  log: (lvl, message) => winstonLogger.log(lvl, message),
  error: log(winstonLogger.error),
  warn: log(winstonLogger.warn),
  info: log(winstonLogger.info),
  verbose: log(winstonLogger.verbose),
  debug: log(winstonLogger.debug),
  silly: log(winstonLogger.silly),
  stream: stream
}
