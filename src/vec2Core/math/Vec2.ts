import Matrix3x3 from "./matrix3x3/Matrix3x3";



export default class Vec2
{
    x: number;
    y: number;


    /**
     * @param x_
     * @param y_
     */
    constructor(
        x_: number,
        y_: number
    )
    {
        this.x = x_;
        this.y = y_;
    }


    public applyMatrix(m: Readonly<Matrix3x3>): this
    {
        return this;
    }
}