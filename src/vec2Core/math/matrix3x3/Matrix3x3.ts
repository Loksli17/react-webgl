


export default class Matrix3x3
{
    
    private data: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0];


    /**
     * @param m_
     * @returns
     */
    public multiply(m_: Readonly<Matrix3x3>): this
    {
        //todo mult matrix
        return this;
    }


    public identity(): this
    {
        this.data = [
            1, 0, 0, 
            0, 1, 0, 
            0, 0, 1
        ];

        return this;
    }

    
    /**
     * @returns
     */
    public cloneElements(): Array<number>
    {
        return this.data.slice(0);
    }
}