
import Vec2 from "./Vec2";


export default interface BoundingBox
{
    leftTop    : Vec2;
    rightTop   : Vec2;
    rightBottom: Vec2;
    leftBottom : Vec2;
}