import Matrix3x3 from "./Matrix3x3";



export namespace Matrix3x3Factory
{

    export function MakeIdentityMatrix()
    {
        return new Matrix3x3().identity();
    }
}