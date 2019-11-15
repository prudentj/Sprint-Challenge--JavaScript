// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2{
    construtor(info){
    this.length = info.length,
    this.width = info.width,
    this.height = info.height
    }
    volume(){
        return (this.length * this.width * this.height);
      }
    surfaceArea(){
        console.log("I am running")
        return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
      }
  }

const cuboid2= new CuboidMaker2({length:5, width:5, height:5});
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.