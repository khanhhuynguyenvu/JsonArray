$(function(){
		var myObj,myObj2, x,y;
		myObj =[
			{"id":"65467","name":"james"},
			{"id":"435","name":"adamsJones"},
			{"id":"123","name":"fdsfasdf"},
			{"id":"5435","name":"ssdasdvcxb"},
			{"id":"2455435","name":"adamsJones"}
		];
		//Jquery style
		
		$('#Push1').on('click',function(){
			$('.body1').append('<h3>'+'Key'+' : '+'Value'+'</h3>');
			$.each(myObj,function(index,item){
				$.each(item,function(key,val){
					$('.body1').append('<p>'+key+' : '+val+'</p>');
				});
			});
		})

		$('#Delete1').on('click',function(){
			$('.body1').html('');
		});
		//Js style*/
		myObj2 =[
			{"id":"65467","name":"james"},
			{"id":"435","name":"adamsJones"},
			{"id":"123","name":"fdsfasdf"},
			{"id":"5435","name":"ssdasdvcxb"},
			{"id":"2455435","name":"adamsJones"}
		];
		
		$('#Push2').on('click',function(){
			$('.body2').append('<p>'+'----------------------'+'</p>');
				for(i in myObj2){
				$('.body2').append('<p>'+myObj2[i].id+' '+myObj2[i].name+'</p>')
				}
		});
		$('#Delete2').on('click',function(){
			$('.body2').html('');
		});
})