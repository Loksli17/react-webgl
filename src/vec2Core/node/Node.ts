import Matrix3x3         from "../math/matrix3x3/Matrix3x3";
import ITransformable    from "../math/transformable/ITransformable";
import TransformableSize from "../math/transformable/ITransformableSize";
import Transformable from "../math/transformable/Transformable";



export default class Node implements ITransformable
{
    
    private transformable: ITransformable = new Transformable();

    
    public updateWorldMatrix(parentMatrix: Readonly<Matrix3x3> | null): void 
    {
        this.transformable.updateWorldMatrix(parentMatrix);
    }


    public getSize(): TransformableSize
    {
        return this.transformable.getSize();
    }


    public getCopySize(): TransformableSize 
    {
        return this.transformable.getCopySize();
    }

}