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

export const deleteProduct = (req: Request, res: Response)=>{
    const { id } = req.params;
    res.json({
        message: 'delete products',
        id
    })
}

export const postProduct = (req: Request, res: Response )=>{
    const { body } = req;

    res.json({
        message: 'post products',
        body
    })
}