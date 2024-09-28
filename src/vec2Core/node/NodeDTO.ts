import ITransformableDTO from "../math/transformable/ITransformableDto";


export default interface NodeDTO extends ITransformableDTO
{
    name     : string;
    isVisible: boolean;
}