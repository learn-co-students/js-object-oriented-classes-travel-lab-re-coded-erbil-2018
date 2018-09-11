class Driver{
  constructor(name,startDate){
    this.name=name;
    this.startDate=new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year){
    let endDate = new Date(year,1,1);
    let totalYears = (endDate  - this.startDate) / (365*24*60*60*1000);
    return parseInt(totalYears)+1;
  }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
class Route{
  constructor(beginningLocation, endingLocation){
    this.endingLocation = endingLocation;
    this.beginningLocation = beginningLocation;
  }
  blocksTravelled(){
    let vertical = this.endingLocation.vertical - this.beginningLocation.vertical;
    let horizontal = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);
    return vertical + horizontal;
  }
  estimatedTime(peak){
    if(peak){
      let vertical = (this.endingLocation.vertical - this.beginningLocation.vertical)/2;
    let horizontal = (eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal))/2;
    return vertical + horizontal;
    }else{
      let vertical = (this.endingLocation.vertical - this.beginningLocation.vertical)/3;
    let horizontal = (eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal))/3;
    return vertical + horizontal;
    }
  }
}