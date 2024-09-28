import DTOEntity         from "../dto/DTOEntity";
import Matrix3x3         from "../math/matrix3x3/Matrix3x3";
import ITransformable    from "../math/transformable/ITransformable";
import TransformableSize from "../math/transformable/ITransformableSize";
import Transformable     from "../math/transformable/Transformable";
import NodeDTO           from "./NodeDTO";




export default class Node extends DTOEntity<NodeDTO> implements ITransformable
{
    
    private transformable: Transformable = new Transformable();
    private isVisible    : boolean       = true;
    private name         : string        = "Node";

    
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


    public createDTO(): NodeDTO 
    {
        return {
            ...this.transformable.createDTO(),
            name     : this.name,
            isVisible: this.isVisible
        }
    }

}