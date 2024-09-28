import { DTOEntity }         from "../../dto/DTOEntity";
import BoundingBox           from "../BoundingBox";
import Matrix3x3             from "../matrix3x3/Matrix3x3";
import { ITransformableDTO } from "./ITransformableDto";
import { TransformableSize } from "./ITransformableSize";
import ITransformable        from "./ITransformable";

import { 
    createNullBB, 
    updateBBFromMatrix3x3 
} from "../utils/BBUtils";




export default abstract class Transformable 
    extends DTOEntity<ITransformableDTO>
    implements ITransformable
{
    
    private localMatrix: Matrix3x3         = new Matrix3x3();
    private worldMatrix: Matrix3x3         = new Matrix3x3();
    private boundingBox: BoundingBox       = createNullBB();
    private size       : TransformableSize = new TransformableSize();


    private calculateBoundingBox(): void
    {
        updateBBFromMatrix3x3(
            this.boundingBox, 
            this.worldMatrix
        );
    }


    public updateWorldMatrix(parentMatrix: Readonly<Matrix3x3> | null): void
    {
        this.worldMatrix.identity();
        if(parentMatrix) this.worldMatrix.multiply(parentMatrix);
        
        this.worldMatrix.multiply(this.localMatrix);
        
        this.calculateBoundingBox();
    }


    public getSize(): TransformableSize 
    {
        return this.size;
    }


    public getCopySize(): TransformableSize 
    {
        const size = new TransformableSize();
        size.copy(this.size);
        return size;
    }


    public createDTO(): ITransformableDTO
    {
        
        return {
            transform: this.localMatrix.cloneElements(),
            size     : this.size.createDTO(),
        };
    }

}