export type Logger = {
    error(message: string, ...optionalParams: unknown[]): void
    warn(message: string, ...optionalParams: unknown[]): void
    info(message: string, ...optionalParams: unknown[]): void
    verbose(message: string, ...optionalParams: unknown[]): void
    debug(message: string, ...optionalParams: unknown[]): void
}