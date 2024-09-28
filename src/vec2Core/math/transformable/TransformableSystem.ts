import Vec2           from "../Vec2";
import ITransformable from "./ITransformable";



export namespace TransformableSystem
{
    

    export function translate(transformable: ITransformable, distanceVector: Readonly<Vec2>): void
    {
        transformable.updateWorldMatrix(null);
    }


    export function translateTo(transformable: ITransformable, to: Readonly<Vec2>): void
    {
        transformable.updateWorldMatrix(null);
    }


    export function resizeByCoeffs(transformable: ITransformable, coeffX: number, coeffY: number): void
    {
        transformable.updateWorldMatrix(null);
    }


    export function resizeByLeftTop(transformable: ITransformable, distanceVector: Readonly<Vec2>): void
    {
        transformable.updateWorldMatrix(null);
    }


    export function resizeByLeftBottom(transformable: ITransformable, distanceVector: Readonly<Vec2>): void
    {
        transformable.updateWorldMatrix(null);
    }


    export function resizeByRightTop(transformable: ITransformable, ): void
    {
        transformable.updateWorldMatrix(null);
    }
}