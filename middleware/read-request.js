//middleware para analizar el cuerpo de la solicitud

const readRequest = (req, res, next) => {
    console.log('Request body:', req.body);
    console.log('Request query:', req.query);
    console.log('Request params:', req.params);
    //envia estos datos al siguiente middleware
    const data = {
        body: req.body,
        query: req.query,
        params: req.params
    };
    req.userData = data;
    next();
};

module.exports = readRequest;