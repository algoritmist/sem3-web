class GraphForm{
    constructor(x, y, r){
        this._x = x;
        this._y = y;
        this._r = r;
    }

    is_valid(y){
        return Number.isInteger(y) && (-3 <= y && y <= 5);
    }
}