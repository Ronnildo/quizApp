import jwt from "jsonwebtoken";
import { promisify } from "util";
import authConfig from "../../config/auth";

export default async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: "Token não enviado" });
    }

    console.log(authHeader);

    const [bearer, token] = authHeader.split(" ");

    try {
        const decodificar = await promisify(jwt.verify)(token, authConfig.secret);
        console.log(decodificar);
        req.userId = decodificar.id;

        return next();
    }   catch (err){
        return res.status(401).json({ error: "Token Invalido!" });
    }
};