
function round(value, exp) 
{
  if (typeof exp === 'undefined' || +exp === 0)
    return Math.round(value);

  value = +value;
  exp = +exp;

  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
    return NaN;

  // Shift
  value = value.toString().split('e');
  value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));

  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
}
function Get_mean()
	{
		
		
		
		var s1 = document.getElementById("a1_recievedgrade").value;
		var t1 = document.getElementById("a1_totalgrade").value;
		var r1 = ((s1/t1)*100) ;
		document.getElementById("a1_result").innerHTML = round(r1,3);
		
		
		var s2 = document.getElementById("a2_recievedgrade").value;
		
		var t2 = document.getElementById("a2_totalgrade").value;
		var r2 = ((s2/t2)*100) ;
		document.getElementById("a2_result").innerHTML = round(r2,3);
		
		
		
		var s3 = document.getElementById("a3_recievedgrade").value;
		
		var t3 = document.getElementById("a3_totalgrade").value;
		var r3 = ((s3/t3)*100) ;
		document.getElementById("a3_result").innerHTML = round(r3,3);
		
		
		
		
		
		var s4 = document.getElementById("a4_recievedgrade").value;
		
		var t4 = document.getElementById("a4_totalgrade").value;
		var r4 = ((s4/t4)*100) ;
		document.getElementById("a4_result").innerHTML = round(r4,3);
		
		
		var s_Total = ((r1+r2+r3+r4)/4);
		document.getElementById("mean").innerHTML = round(s_Total,2);
	if (s_Total >= 50)
		document.getElementById("pass").innerHTML = "Congrats You passed!!";
	else
		document.getElementById("pass").innerHTML = " You are Fail better luck nexttime :) ";
	}


function Get_weight()
{



                        var s1 = document.getElementById("a1_recievedgrade").value;
                        var t1 = document.getElementById("a1_totalgrade").value;
                      
                        var w1 = document.getElementById("a1_weight").value;
						var r1 = ((s1/t1)*w1);
                        document.getElementById("a1_result").innerHTML = round(r1,3);


                        var s2 = document.getElementById("a2_recievedgrade").value;

                        var t2 = document.getElementById("a2_totalgrade").value;
                        
                        var w2 = document.getElementById("a2_weight").value;
						var r2 = ((s2/t2)*w2);
                        document.getElementById("a2_result").innerHTML = round(r2,3);



                        var s3 = document.getElementById("a3_recievedgrade").value;

                        var t3 = document.getElementById("a3_totalgrade").value;
                      
                        var w3= document.getElementById("a3_weight").value;
						var r3 = ((s3/t3)*w3);
                        document.getElementById("a3_result").innerHTML = round(r3,3);





                        var s4 = document.getElementById("a4_recievedgrade").value;
						var t4 = document.getElementById("a4_totalgrade").value;
                        var w4 = document.getElementById("a4_weight").value;
						var r4 = ((s4/t4)*w4);
                        document.getElementById("a4_result").innerHTML = round(r4,3);
                       
						var r_c = (w1+w2+w3+w4);

                        var s_Total2 = (((r1+r2+r3+r4)/(r_c))*100);

                        document.getElementById("weight").innerHTML = round(s_Total2,3);
    if (s_Total2 >= 50)
	{	document.getElementById("pass").innerHTML = "Congrats You passed!!";
	else
		document.getElementById("pass").innerHTML = " You are Fail better luck nexttime :) ";
		
	} 
		
}