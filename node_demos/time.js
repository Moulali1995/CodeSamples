let attData={
	intime:new Date('Fri Aug 30 2019 11:42:25 GMT+0530 (India Standard Time)'),
	outtime:new Date('Fri Aug 30 2019 18:42:25 GMT+0530 (India Standard Time)'),
	location:"zen3,kukatpally",
	shift:"general"
};
let attData1=attData;
console.log(attData.intime.getHours(),attData.outtime.getHours())
let diff=attData.intime.getHours()-attData.outtime.getHours();
console.log(attData1,diff);
			