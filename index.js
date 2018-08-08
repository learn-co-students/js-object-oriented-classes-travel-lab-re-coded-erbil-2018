class Driver{
  constructor(name, startDate ){
  this.name=name
  this.startDate=new Date(startDate)
  }
  yearsExperienceFromBeginningOf(year){
    return year-this.startDate.getFullYear();
  }
}
let driver = new Driver("Alfie", "Aug 9, 1995")
driver.yearsExperienceFromBeginningOf(2018);

class Route{
  constructor(beginningLocation, endingLocation ){
  this.beginningLocation=beginningLocation;
  this.endingLocation=endingLocation;
  }
  blocksTravelled(){
    const numofblocktravelled = Math.abs(parseInt
    (this.beginningLocation.vertical)-parseInt
    (this.endingLocation.vertical));
    
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    
        const avenue = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
        return numofblocktravelled + avenue;
  }
  
  estimatedTime(min){
    console.log(this.blocksTravelled())
    if(min === undefined){
    return this.blocksTravelled()/3;}
    else{
      return this.blocksTravelled()/2;
    }
  }
}


let route = new Route({horizontal: '1st Avenue', vertical: '34'}, {horizontal: 'Park', vertical: '45'})
route.blocksTravelled()
route.estimatedTime()