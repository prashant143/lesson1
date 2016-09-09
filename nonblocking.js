var fs = require('fs');

//load food list asynchronously

var food = fs.readFile('food.txt','utf8',function(err,food)
{	
console.log('food');
	if(err){
		console.log(err);
	}
	else
	{
	console.log(food);
	}
});



var drinks = fs.readFile('drinks.txt','utf8', function (err, drinks){
	console.log('\nDRINKS')
	if(err)
	{
		console.log(err);
	}
	else
	{	
		console.log(drinks);
	}


});
