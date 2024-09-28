import BoundingBox from "../BoundingBox";
import Matrix3x3   from "../matrix3x3/Matrix3x3";
import Vec2        from "../Vec2";



export function createNullBB(): BoundingBox
{
    return {
        leftTop    : new Vec2(0, 0),
        rightTop   : new Vec2(0, 0),
        rightBottom: new Vec2(0, 0),
        leftBottom : new Vec2(0, 0)
    };
}


export function createBBformMatrix(m: Readonly<Matrix3x3>): BoundingBox
{
    
    return {
        leftTop    : new Vec2(0, 0),
        rightTop   : new Vec2(0, 0),
        rightBottom: new Vec2(0, 0),
        leftBottom : new Vec2(0, 0)
    }
}


export function updateBBFromMatrix3x3(bb: BoundingBox, m: Readonly<Matrix3x3>): BoundingBox
{
    return bb;
}