class ErrorHandler extends Error {
    constructor(meggage, statusCode) {
        super(meggage);
        this.statusCode = statusCode

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = ErrorHandler;