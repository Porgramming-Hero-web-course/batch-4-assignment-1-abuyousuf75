{
  //Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

type Circle = {
    shape : 'circle';
    radius : number;

}

type Rectangle = {
   shape: "rectangle";
    width: number;
    height : number;
};

type Shape = Circle | Rectangle;


const calculateShapeArea = (shape : Shape) : number => {

    if(shape.shape ==='circle'){
        const calculateCircle = Math.PI * shape.radius*shape.radius;
        return calculateCircle
    }
    if(shape.shape ==='rectangle'){
        const calculateRec = shape.height * shape.width;
        return calculateRec
    }
    else{
        throw Error('Unknown shape')
    }
}


const circle : Circle = {
    shape : 'circle',
    radius : 10
}
const rectangle : Rectangle = {
    shape : "rectangle",
    height : 10,
    width : 10,
}

console.log(calculateShapeArea(circle))







}