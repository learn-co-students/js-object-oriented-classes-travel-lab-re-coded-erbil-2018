
class Driver{
	constructor(name, startDate){
		this.name = name;
		this.startDate = new Date(startDate);
	}
	yearsExperienceFromBeginningOf(year){
		return year - (this.startDate).getFullYear()
	}
}


class Route{
	constructor(beginningLocation, endingLocation){
		this.beginningLocation = beginningLocation;
		this.endingLocation = endingLocation;
	}

	blocksTravelled(){
		let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
		var endHori = eastWest.indexOf(this.endingLocation.horizontal);
		var begHori = eastWest.indexOf(this.beginningLocation.horizontal);


		var start = this.beginningLocation.vertical;
		var end = this.endingLocation.vertical;


         if(end > start && endHori > begHori){
			return (endHori - begHori)+ (end - start)
		}else if(end > start){
			return end - start;
		}else{
			return endHori - begHori
		}

	}

	estimatedTime(peak){
		if(peak){
			return this.blocksTravelled()/2
		}else{
			return this.blocksTravelled()/3
		}
	}
}