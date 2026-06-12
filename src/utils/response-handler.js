export const successResponse = (
    res,
    statusCode = 200,
    data = null,
    message = "Operação realizada com sucesso."
) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data
    });
};

export const errorResponse = (
    res,
    statusCode = 500,
    message = "Erro interno do servidor.",
    errors = null
) => {
    return res.status(statusCode).json({
        success: false,
        message,
        errors
    });
};