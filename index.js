class Driver{
   constructor(name,startDate){
     this.name=name;
     this.startDate=new Date(startDate);
   }
   yearsExperienceFromBeginningOf(y){
    let sum = new Date(y, 1, 1);
    let totalsum = (sum - this.startDate)/(365*24*60*60*1000);
    return parseInt(totalsum);
  }
}
class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  
}