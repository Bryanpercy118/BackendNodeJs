import { Request, Response} from 'express';

export const getProducts = (req: Request, res: Response)=>{
    res.json({
        message: 'get products'
    })
}

export const getProduct = (req: Request, res: Response)=>{
    const { id } = req.params;
    res.json({
        message: 'get products',
        id
    })
}

