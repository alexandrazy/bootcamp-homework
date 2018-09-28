let args=process.argv.slice(2)

class Turtle{
  constructor (x, y){
		// current coordinates
		this.coord=[x,y]
    
    // previous coordinates
    this.prevcoords = [[x,y]]
  
    this.maxX=4
     if (x>4) {this.maxX=x}
    this.maxY=4
      if (y>4) {this.maxY=y}
      
    this.minX=0
      if (x<0) {this.minX=x}
    this.minY=0
      if (y<0) {this.minY=y}
    // direction east = [1,0], north = [0,-1]...
    this.direction = [1,0]
    return this
  }

  

  // takes an array of previous coordinates and compares them agains the point & checks to see if the point is in the coordinates 
 includesList(l){
   for (let i=0; i<this.prevcoords.length; i++) {
  		if (this.prevcoords[i][0] === l[0] && this.prevcoords[i][1] === l[1]) {
       return true; 
      }
  } 
  return false;
 }
   
    forward(num){
        for ( let i=0; i<num; i++){
        let x = this.coord[0] += this.direction[0]
        let y = this.coord[1] += this.direction[1]
        this.prevcoords.push([x, y])
        if (this.coord[0]>this.maxX){
          this.maxX=this.coord[0]
          }
        if (this.coord[0]<this.minX){
          this.minX=this.coord[0]
        } 
        }
        if (this.coord[1]>this.maxY){
          this.maxY=this.coord[1]
          } 
        if (this.coord[1]<this.minY){
          this.minY=this.coord[1]
        } 
      	return this
    }
    
    right(){
      const x = this.direction[0]
      const y = this.direction[1]

			if (x === 1 && y === 0){
        this.direction = [0,1]
      } else if (x === 0 && y === 1){
        this.direction = [-1,0]
      } else if (x === -1 && y === 0){
        this.direction = [0,-1]
      } else {
        this.direction = [0,1]
      }
      return this
    }
   left(){
			if (this.direction === [1,0]){
        this.direction = [0,-1]
      } else if (this.direction === [0,1]){
        this.direction = [1,0]
      } else if (this.direction === [-1,0]){
        this.direction = [0,1]
      } else {
        this.direction = [-1,0]
      }
     return this
    }
  allPoints(){
    return this.prevcoords
  }
  print(){
    console.log("BEGIN LOG")
    for (let i=this.minY; i<=this.maxY; i++){
      let printString=""
      for(let j=this.minX; j<=this.maxX; j++){
        if (this.includesList([j,i])){
          printString+="*"
        } else {
          printString += " "
        }
      }
      console.log(printString)
    } 
    console.log("END LOG")
  } 
}

const Jo = new Turtle(0,1).forward(3).right().forward(3).right().forward(6).right().print()