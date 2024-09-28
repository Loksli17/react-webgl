import Matrix3x3         from "../matrix3x3/Matrix3x3";
import TransformableSize from "./ITransformableSize";



export default interface ITransformable
{

    updateWorldMatrix(parentMatrix: Readonly<Matrix3x3> | null): void;
    
    getSize(): TransformableSize;

    getCopySize(): TransformableSize;
}