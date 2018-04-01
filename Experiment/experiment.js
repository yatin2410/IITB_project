//------------------------Globle Variables-------------------------//

var level = 1;
var reg1;
var reg2;
var reg3;
var reg4;
var reg5;

var pos1;
var pos2;
var pos3;
var pos4;
var pos5;


var rv = [2,3,5,10,20];

var cnt  =0;

var l1pos1empty = true;
var l1pos2empty = true;
var l1pos3empty = true;
var l1pos4empty = true;
var l1pos5empty = true;

var lpos1 = 0;
var lpos2 = 0;
var lpos3 = 0;
var lpos4 = 0;
var lpos5 = 0;


var isstarted = false;

var now = 0;
var expected =0 ;

var exdiv;
var nowdiv;
var clk;
var wg;
var rt;
var ans;
var ansbtn;

var h = 0; 
var m = 0; 
var s = 0; 
    
var ispause = false;
var timer = 0; 


var regt1;
var regt2;
var regt3;
var regt4;
var regt5;


var line1;
var line2;
var line3;
var line4;
var line5;
var line6;
var line7;
var line8;



//------------------------Help Menu--------------------------------//

var helpContent;
function initialiseHelp() {
    helpContent="";
    helpContent = helpContent + "<h2>Build circuit of required resistance from given resistors Game</h2>";
    helpContent = helpContent + "<h3>In this game what you have to do?</h3>";
    helpContent = helpContent + "<p>Here,you are already given equivalent registance for specified ciecuit. So,you have to find out what combination will make equivalent registance same as given required registance. So,take your pen and book out and start solving...</p>"
    helpContent = helpContent + "<h3>How To Play This Game?</h3>";
    helpContent = helpContent + "<p>Here,in left side it shows 5 Types of registors(2k,3k,5k,10,20k).</p>";
    helpContent = helpContent + "<p>At bottom expected value of registance will show for that perticular level. And at right side registance calue at any instance will show if it means something unless it's meaningless.</p>";
    helpContent = helpContent + "<p>Timer is for knowing the solving Time. It will start again if you'll get wrong answer or reset level or change level.</p>";
    helpContent = helpContent + "<p>At first Game will start at level=1 and if you win it'll automatically change next level. You can also go to perticuler level through slider at top right side.</p>";
    helpContent = helpContent + "<p>So, if you solved circuit then, put registors from left side as left to right and up to down order.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
   	helpContent = helpContent + "<p>pressing Start button will start timer and you will able to see circuit now.</p>";
	helpContent = helpContent + "<p>pressing pause button will stop timer.</p>";
	helpContent = helpContent + "<p>pressing reset button will reset that level.</p>";
	helpContent = helpContent + "<p>slider will change level as you want.</p>"
	helpContent = helpContent + "<p>pressing ANS button at bottom will show you answer fot that level. It also stop your timer.</p>"   	
	helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}


//------------------------Info Menu------------------------------//


var infoContent;
function initialiseInfo() {
    infoContent =  "";
    infoContent = infoContent + "<h2>Build circuit of required resistance from given resistors Game</h2>";
    infoContent = infoContent + "<h3>About Equivalent resistance:- </h3>";
    infoContent = infoContent + "<p>The equivalent resistance of a network is that single resistor that could replace the entire network in such a way that for a certain applied voltage V you get the same current I as you were getting for a network. </p>";
    infoContent = infoContent + "<p>If your network is 'a bunch of resistors in a box', and you can't look inside the box (you just have access to the two terminals sticking out), then equivalent resistance is the simplest network you could imagine being in the box after doing some measurements on it.</p>";
    infoContent = infoContent + "<h3>Finding Equivalent Resistance:- </h3>";
    infoContent = infoContent + "<p>The way we calculate equivalent resistance depends on whether we're working with a series or a parallel circuit. A series circuit is one where all the components are connected in a single, continuous loop. A parallel circuit is one where the components are connected in separate branches</p>";
    infoContent = infoContent + "<p>For a series circuit, we simply add up the resistances of each component. However, in a parallel circuit, the reciprocal of the total resistance is equal to the sums of the reciprocals of the resistances of each branch.</p>";
    infoContent = infoContent + "<h3>In this game what you have to do?</h3>";
    infoContent = infoContent + "<p>Here,you are already given equivalent registance for specified ciecuit. So,you have to find out what combination will make equivalent registance same as given required registance. So,take your pen and book out and start solving...</p>"
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}


//-------------------------Intial All Div----------------------------//

function intialAll()
{
	PIEsetExperimentTitle("Build circuit of required resistance from given resistors");
    PIEsetDeveloperName("Yatin Patel");
    
    //Back-Ground 

    PIEscene.background=new THREE.Color(0x999999);


    //Adding Build Cuircuit and Pick Registors texts
    
	var text = document.createElement('div');
    text.style.position = 'absolute';
    text.style.width = 100;
    text.style.height = 100;
    text.style.color="black";
    text.style.fontSize=22+'px';
    text.innerHTML = "Pick Registors:";
    text.style.top = 80 + 'px';
    text.style.left = 80 + 'px';
    document.body.appendChild(text);

    var text1 = document.createElement('div');
    text1.style.position = 'absolute';
    text1.style.width = 100;
    text1.style.height = 100;
    text1.style.color = "black";
    text1.style.fontSize=26+'px';
    text1.innerHTML = "circuit";
    text1.style.top = 80 + 'px';
    text1.style.left = 600  + 'px';
	document.body.appendChild(text1);    

	var text1 = document.createElement('div');
	text1.style.position = 'absolute';
    text1.style.width = 100;
    text1.style.height = 100;
    text1.style.color = "black";
    text1.style.fontSize=20+'px';
    text1.innerHTML = "R = 2K";
    text1.style.top = 170 + 'px';
    text1.style.left = 50 + 'px';
	document.body.appendChild(text1);    
	
	var text1 = document.createElement('div');
	text1.style.position = 'absolute';
    text1.style.width = 100;
    text1.style.height = 100;
    text1.style.color = "black";
    text1.style.fontSize=20+'px';
    text1.innerHTML = "R = 3K";
    text1.style.top = 245 + 'px';
    text1.style.left = 50 + 'px';
	document.body.appendChild(text1);    
	

	var text1 = document.createElement('div');
	text1.style.position = 'absolute';
    text1.style.width = 100;
    text1.style.height = 100;
    text1.style.color = "black";
    text1.style.fontSize=20+'px';
    text1.innerHTML = "R = 5K";
    text1.style.top = 320 + 'px';
    text1.style.left = 50 + 'px';
	document.body.appendChild(text1);    
	

	var text1 = document.createElement('div');
	text1.style.position = 'absolute';
    text1.style.width = 100;
    text1.style.height = 100;
    text1.style.color = "black";
    text1.style.fontSize=20+'px';
    text1.innerHTML = "R = 10K";
    text1.style.top = 395 + 'px';
    text1.style.left = 40 + 'px';
	document.body.appendChild(text1);    
	

	var text1 = document.createElement('div');
	text1.style.position = 'absolute';
    text1.style.width = 100;
    text1.style.height = 100;
    text1.style.color = "black";
    text1.style.fontSize=20+'px';
    text1.innerHTML = "R = 20K";
    text1.style.top = 470 + 'px';
    text1.style.left = 40 + 'px';
	document.body.appendChild(text1); 

	var text1 = document.createElement('div');
	text1.style.position = 'absolute';
    text1.style.width = 100;
    text1.style.height = 100;
    text1.style.color = "black";
    text1.style.fontSize=50+'px';
    text1.innerHTML = "TIMER:-";
    text1.style.top = 300 + 'px';
    text1.style.left = 1050 + 'px';
	document.body.appendChild(text1);       

	exdiv = document.createElement('div');
	exdiv.style.position = 'absolute';
    exdiv.style.width = 100;
    exdiv.style.height = 100;
    exdiv.style.color = "black";
    exdiv.style.fontSize=30+'px';
    exdiv.innerHTML = "expected: "+expected+"K";
    exdiv.style.top = 500	 + 'px';
    exdiv.style.left = 550 + 'px';
	document.body.appendChild(exdiv);    

	nowdiv = document.createElement('div');
	nowdiv.style.position = 'absolute';
    nowdiv.style.width = 100;
    nowdiv.style.height = 100;
    nowdiv.style.color = "black";
    nowdiv.style.fontSize=30+'px';
    nowdiv.innerHTML = "NOW: "+now+"K";
    nowdiv.style.top = 150	 + 'px';
    nowdiv.style.left = 1150 + 'px';
	document.body.appendChild(nowdiv); 


	clk = document.createElement('div');
	clk.style.position = 'absolute';
    clk.style.width = 100;
    clk.style.height = 100;
    clk.style.color = "seagreen";
    clk.style.fontSize=50+'px';
    clk.innerHTML = "00:00:00";
    clk.style.top = 375 + 'px';
    clk.style.left = 1050 + 'px';
	document.body.appendChild(clk);    

	rt = document.createElement('div');
	rt.style.position = 'absolute';
    rt.style.width = 100;
    rt.style.height = 100;
    rt.style.color = "black";
    rt.style.fontSize=50+'px';
    rt.innerHTML = "Right";
    rt.style.top = 500 + 'px';
    rt.style.left = 1050 + 'px';
    rt.style.visibility = 'hidden';
	document.body.appendChild(rt); 

	wg = document.createElement('div');
	wg.style.position = 'absolute';
    wg.style.width = 100;
    wg.style.height = 100;
    wg.style.color = "black";
    wg.style.fontSize=50+'px';
    wg.innerHTML = "WRONG!!";
    wg.style.top = 500 + 'px';
    wg.style.left = 1050 + 'px';
    wg.style.visibility = 'hidden';
	document.body.appendChild(wg); 

	ans = document.createElement('div');
	ans.style.position = 'absolute';
    ans.style.width = 100;
    ans.style.height = 100;
    ans.style.color = "red";
    ans.style.fontSize=35+'px';
    ans.innerHTML = "ANS:- ";
    ans.style.top = 600+ 'px';
    ans.style.left = 500 + 'px';
    ans.style.visibility = 'hidden';
	document.body.appendChild(ans); 

	ansbtn = document.createElement('button');
	ansbtn.style.position = 'absolute';
    ansbtn.style.width = 100;
    ansbtn.style.height = 100;
    ansbtn.style.color = "grey";
    ansbtn.style.fontSize=35+'px';
    ansbtn.innerHTML = "ANS";
    ansbtn.style.top = 600+ 'px';
    ansbtn.style.left = 600 + 'px';
    ansbtn.onclick="showAns()"
	ansbtn.addEventListener ("click", showAns);
	document.body.appendChild(ansbtn); 

	

	//adding lavel menu in controls

	PIEaddInputSlider('Level', 1, changeLevel, 1, 5, 1);	


}

//-----------------------Load First called Function--------------//

function loadExperimentElements(){


		initialiseInfo();
		initialiseHelp();

		// intialise 
		intialAll();

		//adding Cuircuits here
   
		addLevel();


		//add 5 Registors drawings

		//intialComp();



}


//------------------------Update second and while start called Function----------//

function updateExperimentElements(t, dt){


}



//---------------------------called When Reser pressed----------------------------//

function resetExperiment(){


	PIEremoveElement(regt1);
  	PIEremoveElement(regt2);
	PIEremoveElement(regt3);
  	PIEremoveElement(regt4);
  	PIEremoveElement(regt5);


	if(level==1)
		changeLevelAuto(1);
	if(level==2)
		changeLevelAuto(2);
	if(level==3)
		changeLevelAuto(3);
	if(level==4)
		changeLevelAuto(4);
	if(level==5)
		changeLevelAuto(5);



}


//-------------------intialise registors----------------------//

function intialComp()
{

	var geometry = new THREE.PlaneGeometry(3.5,1.25);
	var material = new THREE.MeshPhongMaterial({color:0x483d8b});
	reg1 = new THREE.Mesh(geometry,material);
	reg1.position.z = -50;
	reg1.position.x = -20;
	reg1.position.y = 6;
	PIEaddElement(reg1);

	reg2 = new THREE.Mesh(geometry,material);
	reg2.position.z = -50;
	reg2.position.x = -20;
	reg2.position.y = 3;
	PIEaddElement(reg2);
	
	reg3 = new THREE.Mesh(geometry,material);
	reg3.position.z = -50;
	reg3.position.x = -20;
	reg3.position.y = 0;
	PIEaddElement(reg3);
	
	reg4 = new THREE.Mesh(geometry,material);
	reg4.position.z = -50;
	reg4.position.x = -20;
	reg4.position.y = -3;
	PIEaddElement(reg4);
	
	reg5 = new THREE.Mesh(geometry,material);
	reg5.position.z = -50;
	reg5.position.x = -20;
	reg5.position.y = -6;
	PIEaddElement(reg5);

	

}


//--------------------------called When Level'll Change--------------------------//

function changeLevel()
{
	
	level = PIEgetInputSlider('Level');
	//reset();
	addLevel();
}


//---------------------cahanging level automatically-----------------------------//


function changeLevelAuto(l)
{
	level = l;
	if(level<=5)
	{
		addLevel();		
	}

}


//---------------------Adding Curcuits for current Level-----------------------//

function addLevel()
{
	if(level==1){
	setcir1();
	}	
	if(level==2){
	setcir2();
	}
	if(level==3){
	setcir3();
	}
	if(level==4){
	setcir4();
	}
	if(level==5){
	setcir5();
	}

}


function reset()
{

	isstarted = false;
	timer = 0;
	ispause = false;
	cnt  =0;

	l1pos1empty = true;
	l1pos2empty = true;
	l1pos3empty = true;
	l1pos4empty = true;
	l1pos5empty = true;
	
	lpos1 = 0;
	lpos2 = 0;
	lpos3 = 0;
	lpos4 = 0;
	lpos5 = 0;

	isstarted = false;

	now = 0;
	expected =0 ;
	//change();

	PIEremoveDragElement(reg1);
	PIEremoveDragElement(reg2);
	PIEremoveDragElement(reg3);
	PIEremoveDragElement(reg4);
	PIEremoveDragElement(reg5);


	PIEremoveElement(reg1);
	PIEremoveElement(reg2);
	PIEremoveElement(reg3);
	PIEremoveElement(reg4);
	PIEremoveElement(reg5);
	



	PIEremoveElement(pos1);
	PIEremoveElement(pos2);
	PIEremoveElement(pos3);
	PIEremoveElement(pos4);
	PIEremoveElement(pos5);


	PIEremoveElement(line1);
	PIEremoveElement(line2);
	PIEremoveElement(line3);
	PIEremoveElement(line4);
	PIEremoveElement(line5);
	PIEremoveElement(line6);
	PIEremoveElement(line7);
	PIEremoveElement(line8);
	
	


	ansbtn.style.visibility = 'visible';
	ans.style.visibility = 'hidden';
	rt.style.visible = 'hidden';
	wg.style.visibility = 'hidden';


	h = 0;
	m = 0;
	s = 0;

	intialComp();

}



//---------------set circuit-1-----------------//
function setcir1()
{
	
	reset();


		i = Math.floor((Math.random()*5)+0);
		j = Math.floor((Math.random()*5)+0);
		
		while(j==i)
		{
			j = Math.floor((Math.random()*5)+0);
		}

		expected = rv[i]+rv[j];

	    ans.innerHTML = "ANS:- " + rv[i]+" "+rv[j];
		exdiv.innerHTML = "expected: "+expected.toPrecision(4)+"K";
		document.body.appendChild(exdiv);



	PIEdragElement(reg1);        
    PIEsetDrag(reg1,drag1);

    PIEdragElement(reg2);        
    PIEsetDrag(reg2,drag1);

    PIEdragElement(reg3);        
    PIEsetDrag(reg3,drag1);

    PIEdragElement(reg4);        
    PIEsetDrag(reg4,drag1);

    PIEdragElement(reg5);        
    PIEsetDrag(reg5,drag1);


}



//---------------set circuit-2-----------------//
function setcir2()
{	

	reset();


		i = Math.floor((Math.random()*5)+0);
		j = Math.floor((Math.random()*5)+0);
		
		while(j==i)
		{
			j = Math.floor((Math.random()*5)+0);
		}


		expected = (rv[i]*rv[j])/(rv[i]+rv[j]);

		ans.innerHTML = "ANS:- " + rv[i]+" "+rv[j];
		exdiv.innerHTML = "expected: "+expected.toPrecision(4)+"K";
		document.body.appendChild(exdiv);



	PIEdragElement(reg1);        
    PIEsetDrag(reg1,drag2);

    PIEdragElement(reg2);        
    PIEsetDrag(reg2,drag2);

    PIEdragElement(reg3);        
    PIEsetDrag(reg3,drag2);

    PIEdragElement(reg4);        
    PIEsetDrag(reg4,drag2);

    PIEdragElement(reg5);        
    PIEsetDrag(reg5,drag2);



   // window.alert(done);
}



//---------------set circuit-3-----------------//
function setcir3()
{

	reset();
	
		i = Math.floor((Math.random()*5)+0);
		j = Math.floor((Math.random()*5)+0);
		k = Math.floor((Math.random()*5)+0);
		l = Math.floor((Math.random()*5)+0);
		

		while(j==i)
		{
			j = Math.floor((Math.random()*5)+0);
		}

		while(k==j || k==i)
		{
			k = Math.floor((Math.random()*5)+0);
		}

		while(l==k || l==j || l==i)
		{
			l = Math.floor((Math.random()*5)+0);		
		}

		expected = rv[i]+rv[l]+((rv[j]*rv[k])/(rv[j]+rv[k]));
		ans.innerHTML = "ANS:- " + rv[i]+" "+rv[j]+" "+rv[k]+" "+rv[l];
		exdiv.innerHTML = "expected: "+expected.toPrecision(4)+"K";
		document.body.appendChild(exdiv);



	PIEdragElement(reg1);        
    PIEsetDrag(reg1,drag3);

    PIEdragElement(reg2);        
    PIEsetDrag(reg2,drag3);

    PIEdragElement(reg3);        
    PIEsetDrag(reg3,drag3);

    PIEdragElement(reg4);        
    PIEsetDrag(reg4,drag3);

    PIEdragElement(reg5);        
    PIEsetDrag(reg5,drag3);

}



//---------------set circuit-4-----------------//
function setcir4()
{

	reset();
	

		i = Math.floor((Math.random()*5)+0);
		j = Math.floor((Math.random()*5)+0);
		k = Math.floor((Math.random()*5)+0);
		l = Math.floor((Math.random()*5)+0);
		

		while(j==i)
		{
			j = Math.floor((Math.random()*5)+0);
		}

		while(k==j || k==i)
		{
			k = Math.floor((Math.random()*5)+0);
		}

		while(l==k || l==j || l==i)
		{
			l = Math.floor((Math.random()*5)+0);		
		}

		expected = rv[i]+((rv[j]*rv[k]*rv[l])/((rv[j]*rv[k])+(rv[k]*rv[l])+(rv[l]*rv[j])));
		ans.innerHTML = "ANS:- " + rv[i]+" "+rv[j]+" "+rv[k]+" "+rv[l];
		exdiv.innerHTML = "expected: "+expected.toPrecision(4)+"K";
		document.body.appendChild(exdiv);



	PIEdragElement(reg1);        
    PIEsetDrag(reg1,drag4);

    PIEdragElement(reg2);        
    PIEsetDrag(reg2,drag4);

    PIEdragElement(reg3);        
    PIEsetDrag(reg3,drag4);

    PIEdragElement(reg4);        
    PIEsetDrag(reg4,drag4);

    PIEdragElement(reg5);        
    PIEsetDrag(reg5,drag4);
	
}



//---------------set circuit-5-----------------//
function setcir5()
{
	reset();
 
		i = Math.floor((Math.random()*5)+0);
		j = Math.floor((Math.random()*5)+0);
		k = Math.floor((Math.random()*5)+0);
		l = Math.floor((Math.random()*5)+0);
		m = Math.floor((Math.random()*5)+0);
				

		while(j==i)
		{
			j = Math.floor((Math.random()*5)+0);
		}

		while(k==j || k==i)
		{
			k = Math.floor((Math.random()*5)+0);
		}

		while(l==k || l==j || l==i)
		{
			l = Math.floor((Math.random()*5)+0);		
		}

		while(m==l || m==k || m==j ||m==i)
		{
			m = Math.floor((Math.random()*5)+0);
		}

		expected = ((rv[i]*rv[j])/(rv[i]+rv[j]))+((rv[k]*rv[l]*rv[m])/((rv[k]*rv[l])+(rv[l]*rv[m])+(rv[m]*rv[k])));
		ans.innerHTML = "ANS:- " + rv[i]+" "+rv[j]+" "+rv[k]+" "+rv[l]+" "+rv[m];
		exdiv.innerHTML = "expected: "+expected.toPrecision(4)+"K";
		document.body.appendChild(exdiv);



	PIEdragElement(reg1);        
    PIEsetDrag(reg1,drag5);

    PIEdragElement(reg2);        
    PIEsetDrag(reg2,drag5);

    PIEdragElement(reg3);        
    PIEsetDrag(reg3,drag5);

    PIEdragElement(reg4);        
    PIEsetDrag(reg4,drag5);

    PIEdragElement(reg5);        
    PIEsetDrag(reg5,drag5);
	
	
}



//---------------drag-1----------------------//


function drag1(element, newpos){
	

	if(isstarted)
	 {
	
	
	if(!(element.position.x>-5.25 && element.position.x<-0.75 &&  element.position.y>-2.75 && element.position.y<-1.25) && l1pos1empty)
	{
	element.position.set(newpos.x,newpos.y,newpos.z);
	}

	else if(l1pos1empty)
	{
		
		l1pos1empty = false;
		cnt++;
		if(element==reg1)
		lpos1 = 2;
		if(element==reg2)
		lpos1 = 3;
		if(element==reg3)
		lpos1 = 5;
		if(element==reg4)
		lpos1 = 10;
		if(element==reg5)
		lpos1 = 20;
		
		PIEremoveElement(element);

		var geometry = new THREE.PlaneGeometry(3.5,1.25);
		var material = new THREE.MeshPhongMaterial({color:0x483d8b});
		regt2 = new THREE.Mesh(geometry,material);
		regt2.position.z = -50;
		regt2.position.x = -3;
		regt2.position.y = -2;
		PIEaddElement(regt2);
		change();
		//window.alert();
	}

	else if(!(element.position.x>1.75 && element.position.x<6.25 &&  element.position.y>-2.75 && element.position.y<-1.25) && l1pos2empty && !l1pos1empty)
	{
	element.position.set(newpos.x,newpos.y,newpos.z);
	}

	else if(l1pos2empty && !l1pos1empty)
	{
		lpos2empty = false;
		cnt++;
		if(element==reg1)
		lpos2 = 2;
		if(element==reg2)
		lpos2 = 3;
		if(element==reg3)
		lpos2 = 5;
		if(element==reg4)
		lpos2 = 10;
		if(element==reg5)
		lpos2 = 20;
		
		PIEremoveElement(element);

		var geometry = new THREE.PlaneGeometry(3.5,1.25);
		var material = new THREE.MeshPhongMaterial({color:0x483d8b});
		regt1 = new THREE.Mesh(geometry,material);
		regt1.position.z = -50;
		regt1.position.x =  4;
		regt1.position.y = -2;
		PIEaddElement(regt1);
		change();

	}

	if(cnt==2)
  	{
  	
  	check1();
  	
  	}


  }



}


//---------------------------drag-2------------------------------//


function drag2(element, newpos)
{
	
	//alert(element.position.x+" "+element.position.y);

	if(isstarted)
 	{
	
	

	if(!(element.position.x>-2.25 && element.position.x<2.25 &&  element.position.y>-0.75 && element.position.y<0.75) && l1pos1empty)
	{
	element.position.set(newpos.x,newpos.y,newpos.z);
	}

	else if(l1pos1empty)
	{
		
		l1pos1empty = false;
		cnt++;
		if(element==reg1)
		lpos1 = 2;
		if(element==reg2)
		lpos1 = 3;
		if(element==reg3)
		lpos1 = 5;
		if(element==reg4)
		lpos1 = 10;
		if(element==reg5)
		lpos1 = 20;
		
		PIEremoveElement(element);

		var geometry = new THREE.PlaneGeometry(3.5,1.25);
		var material = new THREE.MeshPhongMaterial({color:0x483d8b});
		regt1 = new THREE.Mesh(geometry,material);
		regt1.position.z = -50;
		regt1.position.x = 0;
		regt1.position.y = 0;
		PIEaddElement(regt1);
		change();
		//window.alert();
	}

	//0 0 4.5,1.5 0 -3

	else if(!(element.position.x>-2.25 && element.position.x<2.25 &&  element.position.y>-3.75 && element.position.y<-2.25) && l1pos2empty && !l1pos1empty)
	{
	element.position.set(newpos.x,newpos.y,newpos.z);
	}

	else if(l1pos2empty && !l1pos1empty)
	{
		lpos2empty = false;
		cnt++;
		if(element==reg1)
		lpos2 = 2;
		if(element==reg2)
		lpos2 = 3;
		if(element==reg3)
		lpos2 = 5;
		if(element==reg4)
		lpos2 = 10;
		if(element==reg5)
		lpos2 = 20;
		
		PIEremoveElement(element);

		var geometry = new THREE.PlaneGeometry(3.5,1.25);
		var material = new THREE.MeshPhongMaterial({color:0x483d8b});
		regt2 = new THREE.Mesh(geometry,material);
		regt2.position.z = -50;
		regt2.position.x =  0;
		regt2.position.y = -3;
		PIEaddElement(regt2);
		change();

	}

	if(cnt==2)
  	{
  	
  	check2();
  	
  	}


  }

}

function drag3(element, newpos)
{
	
	//alert(element.position.x+" "+element.position.y);

	

	if(isstarted)
 	{
	
	

	if(!(element.position.x>-10.25 && element.position.x<-5.75 &&  element.position.y>-2.25 && element.position.y<-0.75) && l1pos1empty)
	{
	element.position.set(newpos.x,newpos.y,newpos.z);
	return;
	}

	else if(l1pos1empty)
	{
		
		l1pos1empty = false;
		cnt++;
		//alert(cnt);
		if(element==reg1)
		lpos1 = 2;
		if(element==reg2)
		lpos1 = 3;
		if(element==reg3)
		lpos1 = 5;
		if(element==reg4)
		lpos1 = 10;
		if(element==reg5)
		lpos1 = 20;
		
		PIEremoveElement(element);
		
		var geometry = new THREE.PlaneGeometry(3.5,1.25);
		var material = new THREE.MeshPhongMaterial({color:0x483d8b});
		regt1 = new THREE.Mesh(geometry,material);
		regt1.position.z = -50;
		regt1.position.x = -8;
		regt1.position.y = -1.5;
		PIEaddElement(regt1);
		change();
		//window.alert();
	}

	else if(!(element.position.x>-2.25 && element.position.x<2.25 &&  element.position.y>-0.75 && element.position.y<0.75) && l1pos2empty && !l1pos1empty)
	{
	element.position.set(newpos.x,newpos.y,newpos.z);
	return;
	}

	else if(l1pos2empty && !l1pos1empty)
	{
		l1pos2empty = false;
		cnt++;

		//alert(cnt+" " +l1pos2empty);
		if(element==reg1)
		lpos2 = 2;
		if(element==reg2)
		lpos2 = 3;
		if(element==reg3)
		lpos2 = 5;
		if(element==reg4)
		lpos2 = 10;
		if(element==reg5)
		lpos2 = 20;
		
		PIEremoveElement(element);
		
		var geometry = new THREE.PlaneGeometry(3.5,1.25);
		var material = new THREE.MeshPhongMaterial({color:0x483d8b});
		regt2 = new THREE.Mesh(geometry,material);
		regt2.position.z = -50;
		regt2.position.x =  0;
		regt2.position.y = 0;
		PIEaddElement(regt2);
		change();

	}


	else if(!(element.position.x>-2.25 && element.position.x<2.25 &&  element.position.y>-3.75 && element.position.y<-2.25) && l1pos3empty &&!l1pos2empty && !l1pos1empty)
	{
	element.position.set(newpos.x,newpos.y,newpos.z);
	return;
	}

	else if(l1pos3empty && !l1pos2empty && !l1pos1empty)
	{
		l1pos3empty = false;
		cnt++;
		//alert(cnt+" "+l1pos3empty+" "+l1pos4empty);
		if(element==reg1)
		lpos3 = 2;
		if(element==reg2)
		lpos3 = 3;
		if(element==reg3)
		lpos3 = 5;
		if(element==reg4)
		lpos3 = 10;
		if(element==reg5)
		lpos3 = 20;
		
		PIEremoveElement(element);

		var geometry = new THREE.PlaneGeometry(3.5,1.25);
		var material = new THREE.MeshPhongMaterial({color:0x483d8b});
		regt3 = new THREE.Mesh(geometry,material);
		regt3.position.z = -50;
		regt3.position.x =  0;
		regt3.position.y = -3;
		PIEaddElement(regt3);
		change();

	}

	// 4.5 1.5 -8 -1.5 0 0 0 -3 8 -1.5
	
	else if(!(element.position.x>5.75 && element.position.x<10.25 &&  element.position.y>-2.25 && element.position.y<-0.75) && l1pos4empty && !l1pos3empty && !l1pos2empty && !l1pos1empty)
	{

		element.position.set(newpos.x,newpos.y,newpos.z);
		return;
	}


	if((element.position.x>5.75 && element.position.x<10.25 &&  element.position.y>-2.25 && element.position.y<-0.75))
	{

		//alert(cnt);
		l1pos4empty = false;
		cnt++;
		if(element==reg1)
		lpos4 = 2;
		if(element==reg2)
		lpos4 = 3;
		if(element==reg3)
		lpos4 = 5;
		if(element==reg4)
		lpos4 = 10;
		if(element==reg5)
		lpos4 = 20;
		
		PIEremoveElement(element);
		
		var geometry = new THREE.PlaneGeometry(3.5,1.25);
		var material = new THREE.MeshPhongMaterial({color:0x483d8b});
		regt4 = new THREE.Mesh(geometry,material);
		regt4.position.z = -50;
		regt4.position.x =  8;
		regt4.position.y = -1.5;
		PIEaddElement(regt4);
		change();

	}
	
	if(cnt==4)
  	{

  	check3();
  	
  	}


  }

}


function drag4(element, newpos)
{

	if(isstarted)
 	{
	
 	
	if(!(element.position.x>-7.25 && element.position.x<-2.75 &&  element.position.y>-0.75 && element.position.y<0.75) && l1pos1empty)
	{
	element.position.set(newpos.x,newpos.y,newpos.z);
	return;
	}

	else if(l1pos1empty)
	{
		
		l1pos1empty = false;
		cnt++;
		//alert(cnt);
		if(element==reg1)
		lpos1 = 2;
		if(element==reg2)
		lpos1 = 3;
		if(element==reg3)
		lpos1 = 5;
		if(element==reg4)
		lpos1 = 10;
		if(element==reg5)
		lpos1 = 20;
		
		PIEremoveElement(element);
		
		
		var geometry = new THREE.PlaneGeometry(3.5,1.25);
		var material = new THREE.MeshPhongMaterial({color:0x483d8b});
		regt1 = new THREE.Mesh(geometry,material);
		regt1.position.z = -50;
		regt1.position.x = -5;
		regt1.position.y = 0;
		PIEaddElement(regt1);
		change();
		//window.alert();
	}

	
	else if(!(element.position.x>0.75 && element.position.x<5.25  &&  element.position.y>2.25 && element.position.y<3.75) && l1pos2empty && !l1pos1empty)
	{
	element.position.set(newpos.x,newpos.y,newpos.z);
	return;
	}

	else if(l1pos2empty && !l1pos1empty)
	{
		l1pos2empty = false;
		cnt++;

		//alert(cnt+" " +l1pos2empty);
		if(element==reg1)
		lpos2 = 2;
		if(element==reg2)
		lpos2 = 3;
		if(element==reg3)
		lpos2 = 5;
		if(element==reg4)
		lpos2 = 10;
		if(element==reg5)
		lpos2 = 20;
		
		PIEremoveElement(element);
	
		var geometry = new THREE.PlaneGeometry(3.5,1.25);
		var material = new THREE.MeshPhongMaterial({color:0x483d8b});
		regt2 = new THREE.Mesh(geometry,material);
		regt2.position.z = -50;
		regt2.position.x =  3;
		regt2.position.y = 3;
		PIEaddElement(regt2);
		change();

	}


	else if(!(element.position.x>0.75 && element.position.x<5.25 &&  element.position.y>-0.75 && element.position.y<0.75) && l1pos3empty &&!l1pos2empty && !l1pos1empty)
	{
	element.position.set(newpos.x,newpos.y,newpos.z);
	return;
	}

	else if(l1pos3empty && !l1pos2empty && !l1pos1empty)
	{
		l1pos3empty = false;
		cnt++;
		//alert(cnt+" "+l1pos3empty+" "+l1pos4empty);
		if(element==reg1)
		lpos3 = 2;
		if(element==reg2)
		lpos3 = 3;
		if(element==reg3)
		lpos3 = 5;
		if(element==reg4)
		lpos3 = 10;
		if(element==reg5)
		lpos3 = 20;
		
		PIEremoveElement(element);


		var geometry = new THREE.PlaneGeometry(3.5,1.25);
		var material = new THREE.MeshPhongMaterial({color:0x483d8b});
		regt3 = new THREE.Mesh(geometry,material);
		regt3.position.z = -50;
		regt3.position.x =  3;
		regt3.position.y = 0;
		PIEaddElement(regt3);
		change();

	}

	
	else if(!(element.position.x>0.75 && element.position.x<5.25 &&  element.position.y>-3.75 && element.position.y<-2.25) && l1pos4empty && !l1pos3empty && !l1pos2empty && !l1pos1empty)
	{

		element.position.set(newpos.x,newpos.y,newpos.z);
		return;
	}


	if((element.position.x>0.75 && element.position.x<5.25 &&  element.position.y>-3.75 && element.position.y<-2.25))
	{

		//alert(cnt);
		l1pos4empty = false;
		cnt++;
		if(element==reg1)
		lpos4 = 2;
		if(element==reg2)
		lpos4 = 3;
		if(element==reg3)
		lpos4 = 5;
		if(element==reg4)
		lpos4 = 10;
		if(element==reg5)
		lpos4 = 20;
		
		PIEremoveElement(element);
		


		var geometry = new THREE.PlaneGeometry(3.5,1.25);
		var material = new THREE.MeshPhongMaterial({color:0x483d8b});
		regt4 = new THREE.Mesh(geometry,material);
		regt4.position.z = -50;
		regt4.position.x =  3;
		regt4.position.y = -3;
		PIEaddElement(regt4);
		change();

	}
	
	if(cnt==4)
  	{

  	check4();
  	
  	}


  }

}


function drag5(element, newpos)
{
	

	if(isstarted)
 	{
	 
 	// 4.5 1.5 -5 3 -5 -3 3 3 3 0 3 -3
	if(!(element.position.x>-7.25 && element.position.x<-2.75 &&  element.position.y>2.25 && element.position.y<3.75) && l1pos1empty)
	{
	element.position.set(newpos.x,newpos.y,newpos.z);
	return;
	}

	else if(l1pos1empty)
	{
		
		l1pos1empty = false;
		cnt++;
		//alert(cnt);
		if(element==reg1)
		lpos1 = 2;
		if(element==reg2)
		lpos1 = 3;
		if(element==reg3)
		lpos1 = 5;
		if(element==reg4)
		lpos1 = 10;
		if(element==reg5)
		lpos1 = 20;
		
		PIEremoveElement(element);
		
		
		var geometry = new THREE.PlaneGeometry(3.5,1.25);
		var material = new THREE.MeshPhongMaterial({color:0x483d8b});
		regt1 = new THREE.Mesh(geometry,material);
		regt1.position.z = -50;
		regt1.position.x = -5;
		regt1.position.y = 3;
		PIEaddElement(regt1);
		change();
		//window.alert();
	}

	if(!(element.position.x>-7.25 && element.position.x<-2.75 &&  element.position.y>-3.75 && element.position.y<-2.25)&& l1pos2empty && !l1pos1empty)
	{
	element.position.set(newpos.x,newpos.y,newpos.z);
	return;
	}


	else if(l1pos2empty && !l1pos1empty)
	{
		
		l1pos2empty = false;
		cnt++;
		//alert(cnt);
		if(element==reg1)
		lpos2 = 2;
		if(element==reg2)
		lpos2 = 3;
		if(element==reg3)
		lpos2 = 5;
		if(element==reg4)
		lpos2 = 10;
		if(element==reg5)
		lpos2 = 20;
		
		PIEremoveElement(element);
		
		
		var geometry = new THREE.PlaneGeometry(3.5,1.25);
		var material = new THREE.MeshPhongMaterial({color:0x483d8b});
		regt2 = new THREE.Mesh(geometry,material);
		regt2.position.z = -50;
		regt2.position.x = -5;
		regt2.position.y = -3;
		PIEaddElement(regt2);
		change();
		//window.alert();
	}

	else if(!(element.position.x>0.75 && element.position.x<5.25  &&  element.position.y>2.25 && element.position.y<3.75) && l1pos3empty && !l1pos2empty && !l1pos1empty)
	{
	element.position.set(newpos.x,newpos.y,newpos.z);
	return;
	}

	else if(l1pos3empty && !l1pos2empty && !l1pos1empty)
	{
		l1pos3empty = false;
		cnt++;

		//alert(cnt+" " +l1pos2empty);
		if(element==reg1)
		lpos3 = 2;
		if(element==reg2)
		lpos3 = 3;
		if(element==reg3)
		lpos3 = 5;
		if(element==reg4)
		lpos3 = 10;
		if(element==reg5)
		lpos3 = 20;
		
		PIEremoveElement(element);
	
		var geometry = new THREE.PlaneGeometry(3.5,1.25);
		var material = new THREE.MeshPhongMaterial({color:0x483d8b});
		regt3 = new THREE.Mesh(geometry,material);
		regt3.position.z = -50;
		regt3.position.x =  3;
		regt3.position.y = 3;
		PIEaddElement(regt3);
		change();

	}


	else if(!(element.position.x>0.75 && element.position.x<5.25 &&  element.position.y>-0.75 && element.position.y<0.75) && l1pos4empty && !l1pos3empty &&!l1pos2empty && !l1pos1empty)
	{
	element.position.set(newpos.x,newpos.y,newpos.z);
	return;
	}

	else if(l1pos4empty && !l1pos3empty && !l1pos2empty && !l1pos1empty)
	{
		l1pos4empty = false;
		cnt++;
		//alert(cnt+" "+l1pos3empty+" "+l1pos4empty);
		if(element==reg1)
		lpos4 = 2;
		if(element==reg2)
		lpos4 = 3;
		if(element==reg3)
		lpos4 = 5;
		if(element==reg4)
		lpos4 = 10;
		if(element==reg5)
		lpos4 = 20;
		
		PIEremoveElement(element);


		var geometry = new THREE.PlaneGeometry(3.5,1.25);
		var material = new THREE.MeshPhongMaterial({color:0x483d8b});
		regt4 = new THREE.Mesh(geometry,material);
		regt4.position.z = -50;
		regt4.position.x =  3;
		regt4.position.y = 0;
		PIEaddElement(regt4);
		change();

	}

	
	else if(!(element.position.x>0.75 && element.position.x<5.25 &&  element.position.y>-3.75 && element.position.y<-2.25) && l1pos5empty &&!l1pos4empty && !l1pos3empty && !l1pos2empty && !l1pos1empty)
	{

		element.position.set(newpos.x,newpos.y,newpos.z);
		return;
	}


	if((element.position.x>0.75 && element.position.x<5.25 &&  element.position.y>-3.75 && element.position.y<-2.25))
	{

		//alert(cnt);
		l1pos5empty = false;
		cnt++;
		if(element==reg1)
		lpos5 = 2;
		if(element==reg2)
		lpos5 = 3;
		if(element==reg3)
		lpos5 = 5;
		if(element==reg4)
		lpos5 = 10;
		if(element==reg5)
		lpos5 = 20;
		
		PIEremoveElement(element);
		


		var geometry = new THREE.PlaneGeometry(3.5,1.25);
		var material = new THREE.MeshPhongMaterial({color:0x483d8b});
		regt5 = new THREE.Mesh(geometry,material);
		regt5.position.z = -50;
		regt5.position.x =  3;
		regt5.position.y = -3;
		PIEaddElement(regt5);
		change();

	}
	
	if(cnt==5)
  	{

  	check5();
  	
  	}


  }


}




//---------------------check-1---------------------------//

function check1()
{

	if(lpos1+lpos2==expected)
  	{
   		
  		PIEpauseAnimation();
		
  		PIEremoveElement(regt1);
  		PIEremoveElement(regt2);

		alert('You Got It Right!');

  		changeLevelAuto(2);

  	}
  	else
  	{
  		PIEpauseAnimation();
  	

  		PIEremoveElement(regt1);
  		PIEremoveElement(regt2);

		alert('You Got It WRONG!!');

		changeLevelAuto(1);
  	}	

}


//---------------------check-2---------------------------//

function check2()
{

	if(((lpos1*lpos2)/(lpos1+lpos2))==expected)
  	{
   		PIEpauseAnimation();


  		PIEremoveElement(regt1);
  		PIEremoveElement(regt2);

		alert('You Got It Right!');
  	
		changeLevelAuto(3);

  	}
  	else
  	{
  		PIEpauseAnimation();


  		PIEremoveElement(regt1);
  		PIEremoveElement(regt2);

		alert('You Got It WRONG!!');

		changeLevelAuto(2);
  	}	

}

function check3()
{

	
	if((lpos1+lpos4+((lpos2*lpos3)/(lpos2+lpos3)))==expected)
  	{
  
  		PIEpauseAnimation();
  		
  		PIEremoveElement(regt1);
  		PIEremoveElement(regt2);
  		PIEremoveElement(regt3);
  		PIEremoveElement(regt4);

		alert('You Got It Right!');

		changeLevelAuto(4);
  	}
  	else
  	{

  		PIEpauseAnimation();

  		PIEremoveElement(regt1);
  		PIEremoveElement(regt2);
  		PIEremoveElement(regt3);
  		PIEremoveElement(regt4);
  		
		alert('You Got It WRONG!!');

		changeLevelAuto(3);

  	}	

}

function check4()
{

	if((lpos1+((lpos2*lpos3*lpos4)/((lpos2*lpos3)+(lpos3*lpos4)+(lpos4*lpos2))))==expected)
  	{
  		PIEpauseAnimation();
  		
  		PIEremoveElement(regt1);
  		PIEremoveElement(regt2);
  		PIEremoveElement(regt3);
  		PIEremoveElement(regt4);

		alert('You Got It Right!');

		changeLevelAuto(5);

  	}
  	else
  	{
  		PIEpauseAnimation();
  	
  		PIEremoveElement(regt1);
  		PIEremoveElement(regt2);
  		PIEremoveElement(regt3);
  		PIEremoveElement(regt4);

		alert('You Got It WRONG!!');

		changeLevelAuto(4);

  	}	

}


function check5()
{

	if((((lpos1*lpos2)/(lpos1+lpos2))+((lpos3*lpos4*lpos5)/((lpos3*lpos4)+(lpos4*lpos5)+(lpos5*lpos3))))==expected)
  	{
  		PIEpauseAnimation();
  		


  		PIEremoveElement(regt1);
  		PIEremoveElement(regt2);
  		PIEremoveElement(regt3);
  		PIEremoveElement(regt4);
  		PIEremoveElement(regt5);

		alert('You Got It Right!');

  	}
  	else
  	{
  		PIEpauseAnimation();
  	
  		PIEremoveElement(regt1);
  		PIEremoveElement(regt2);
  		PIEremoveElement(regt3);
  		PIEremoveElement(regt4);
  		PIEremoveElement(regt5);

		alert('You Got It WRONG!!');

		changeLevelAuto(5);
  	}	

}


//--------------------Change Text -----------------------//

function change(){

	if(level==1)
	{
		now = lpos1+lpos2;
	    nowdiv.innerHTML = "NOW: "+now.toPrecision(4)+"K";
		document.body.appendChild(nowdiv);    

 	}

 	if(level==2)
 	{
		now = ((lpos1*lpos2)/(lpos1+lpos2));
	    nowdiv.innerHTML = "NOW: "+now.toPrecision(4)+"K";
		document.body.appendChild(nowdiv);    
 	}

 	if(level==3)
 	{
 		now = lpos1+lpos4+((lpos2*lpos3)/(lpos2+lpos3));
	    nowdiv.innerHTML = "NOW: "+now.toPrecision(4)+"K";
		document.body.appendChild(nowdiv);    
 	}

 	if(level==4)
 	{
 		now = lpos1+((lpos2*lpos3*lpos4)/((lpos2*lpos3)+(lpos3*lpos4)+(lpos4*lpos2)));
 	    nowdiv.innerHTML = "NOW: "+now.toPrecision(4)+"K";
		document.body.appendChild(nowdiv);    
 	}

 	if(level==5)
 	{
 		now = ((lpos1*lpos2)/(lpos1+lpos2))+((lpos3*lpos4*lpos5)/((lpos3*lpos4)+(lpos4*lpos5)+(lpos5*lpos3)));
 	    nowdiv.innerHTML = "NOW: "+now.toPrecision(4)+"K";
		document.body.appendChild(nowdiv); 
 	}

}

//-------------------ANimation Started---------//

function PIEstartAnimation(){


	if(level==1)
	{

	addLine1();

	var geometry = new THREE.PlaneGeometry(4.5,1.5);
	var material = new THREE.MeshPhongMaterial({color:0xbeebff});
	pos1 = new THREE.Mesh(geometry,material);
	pos1.position.z = -50;
	pos1.position.x = -3;
	pos1.position.y = -2;
	PIEaddElement(pos1);

	pos2 = new THREE.Mesh(geometry,material);
	pos2.position.z = -50;
	pos2.position.x = 4;
	pos2.position.y = -2;
	PIEaddElement(pos2);

	}

	if(level==2)
	{

	addLine2();

	var geometry = new THREE.PlaneGeometry(4.5,1.5);
	var material = new THREE.MeshPhongMaterial({color:0xbeebff});
	pos1 = new THREE.Mesh(geometry,material);
	pos1.position.z = -50;
	pos1.position.x =  0;	
	pos1.position.y = 0;
	PIEaddElement(pos1);

	pos2 = new THREE.Mesh(geometry,material);
	pos2.position.z = -50;
	pos2.position.x =  0;
	pos2.position.y = -3;
	PIEaddElement(pos2);


	}

	if(level==3)
	{

	addLine3();

	var geometry = new THREE.PlaneGeometry(4.5,1.5);
	var material = new THREE.MeshPhongMaterial({color:0xbeebff});
	
	pos1 = new THREE.Mesh(geometry,material);
	pos1.position.z = -50;
	pos1.position.x = -8;
	pos1.position.y = -1.5;
	PIEaddElement(pos1);		

	pos2 = new THREE.Mesh(geometry,material);     
	pos2.position.z = -50;
	pos2.position.x =  0;	
	pos2.position.y = 0;
	PIEaddElement(pos2);

	pos3 = new THREE.Mesh(geometry,material);
	pos3.position.z = -50;
	pos3.position.x =  0;
	pos3.position.y = -3;
	PIEaddElement(pos3);


	pos4 = new THREE.Mesh(geometry,material);
	pos4.position.z = -50;
	pos4.position.x = 8;
	pos4.position.y = -1.5;
	PIEaddElement(pos4);

	}

	if(level==4)
	{

	addLine4();

	var geometry = new THREE.PlaneGeometry(4.5,1.5);
	var material = new THREE.MeshPhongMaterial({color:0xbeebff});
	
	pos1 = new THREE.Mesh(geometry,material);
	pos1.position.z = -50;
	pos1.position.x = -5;
	pos1.position.y = 0;		
	PIEaddElement(pos1);

	pos2 = new THREE.Mesh(geometry,material);
	pos2.position.z = -50;
	pos2.position.x = 3;	
	pos2.position.y = 3;
	PIEaddElement(pos2);

	pos3 = new THREE.Mesh(geometry,material);
	pos3.position.z = -50;
	pos3.position.x = 3;
	pos3.position.y = 0;
	PIEaddElement(pos3);


	pos4 = new THREE.Mesh(geometry,material);
	pos4.position.z = -50;
	pos4.position.x = 3;
	pos4.position.y = -3;
	PIEaddElement(pos4);

	}

	if(level==5)
	{

	addLine5();

	var geometry = new THREE.PlaneGeometry(4.5,1.5);
	var material = new THREE.MeshPhongMaterial({color:0xbeebff});
	
	pos1 = new THREE.Mesh(geometry,material);
	pos1.position.z = -50;
	pos1.position.x = -5;
	pos1.position.y = 3;
	PIEaddElement(pos1);

	pos2 = new THREE.Mesh(geometry,material);
	pos2.position.z = -50;
	pos2.position.x = -5;
	pos2.position.y = -3;
	PIEaddElement(pos2);		
	
	pos3 = new THREE.Mesh(geometry,material);
	pos3.position.z = -50;
	pos3.position.x = 3;	
	pos3.position.y = 3;
	PIEaddElement(pos3);

	pos4 = new THREE.Mesh(geometry,material);
	pos4.position.z = -50;
	pos4.position.x = 3;
	pos4.position.y = 0;
	PIEaddElement(pos4);


	pos5 = new THREE.Mesh(geometry,material);
	pos5.position.z = -50;
	pos5.position.x = 3;
	pos5.position.y = -3;
	PIEaddElement(pos5);

	}

	s=0;
	m=0;
	h=0;

	timer++;
	//window.alert('started');
	if(!ispause)
	{
	isstarted = true;
	
	var ps = document.getElementById('pause');

	ps.style.visibility = 'visible';

	showTime();
	
	}

	else if(ispause)
	{
		ispause = false;
	}

}

function PIEpauseAnimation()
{
	ispause = true;
}




//----------------------digital Clock--------------------------//
 
function showTime(){
	
	if(timer==1){    

	// /alert(m);

    h = (h < 10) && h[0]!='0' ? "0" + h : h;
    m = (m < 10) && m[0]!='0' ? "0" + m : m;
    s = (s < 10) && s[0]!='0'? "0" + s : s;
    
    var time = h + ":" + m + ":" + s;
    clk.innerText = time;
    clk.textContent = time;
    
    document.body.appendChild(clk);
    //console.log(time);
	
	if(!ispause){    
    s++;
    if(s>=60)
    {
    	s=0;
    	m++;
    	if(m>=60)
    	{
    		m=0;
    		h++;
    	}
    }
	
	}

    setTimeout(showTime, 1000);
    }

}



//------------------------ShowAns fucntion---------------------//

function showAns()
{
	PIEpauseAnimation();
	
	ansbtn.style.visibility = 'hidden';
	ans.style.visibility = 'visible';

}


//----------------------- Delete All -------------------------//

function deleteAll()
{

}


//------------------------add wires for circuit-1-----------------//

function addLine1()
{

	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(-7.25,-2,-50));
	geometry.vertices.push(new THREE.Vector3(-5.25,-2,-50));
	line1 = new THREE.Line(geometry,material);
	PIEaddElement(line1);


	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(-0.75,-2,-50));
	geometry.vertices.push(new THREE.Vector3(1.75,-2,-50));
	line2 = new THREE.Line(geometry,material);
	PIEaddElement(line2);


	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(6.25,-2,-50));
	geometry.vertices.push(new THREE.Vector3(8.25,-2,-50));
	line3 = new THREE.Line(geometry,material);
	PIEaddElement(line3);



	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(-7.25,-2,-50));
	geometry.vertices.push(new THREE.Vector3(-7.25,7,-50));
	line4 = new THREE.Line(geometry,material);
	PIEaddElement(line4);



	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(8.25,-2,-50));
	geometry.vertices.push(new THREE.Vector3(8.25,7,-50));
	line5 = new THREE.Line(geometry,material);
	PIEaddElement(line5);


}


function addLine2()
{

	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(-2.25,0,-50));
	geometry.vertices.push(new THREE.Vector3(-3.25,0,-50));
	geometry.vertices.push(new THREE.Vector3(-3.25,-3,-50));
	geometry.vertices.push(new THREE.Vector3(-2.25,-3,-50));
	line1 = new THREE.Line(geometry,material);
	PIEaddElement(line1);


	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(2.25,0,-50));
	geometry.vertices.push(new THREE.Vector3(3.25,0,-50));
	geometry.vertices.push(new THREE.Vector3(3.25,-3,-50));
	geometry.vertices.push(new THREE.Vector3(2.25,-3,-50));
	line2 = new THREE.Line(geometry,material);
	PIEaddElement(line2);


	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(-4.25,-1.5,-50));
	geometry.vertices.push(new THREE.Vector3(-3.25,-1.5,-50));
	line3 = new THREE.Line(geometry,material);
	PIEaddElement(line3);


	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(3.25,-1.5,-50));
	geometry.vertices.push(new THREE.Vector3(4.25,-1.5,-50));
	line4 = new THREE.Line(geometry,material);
	PIEaddElement(line4);

	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(-4.25,-1.5,-50));
	geometry.vertices.push(new THREE.Vector3(-4.25,7,-50));
	line5 = new THREE.Line(geometry,material);
	PIEaddElement(line5);

	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(4.25,-1.5,-50));
	geometry.vertices.push(new THREE.Vector3(4.25,7,-50));
	line6 = new THREE.Line(geometry,material);
	PIEaddElement(line6);
	

}

function addLine3()
{

	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(-2.25,0,-50));
	geometry.vertices.push(new THREE.Vector3(-3.25,0,-50));
	geometry.vertices.push(new THREE.Vector3(-3.25,-3,-50));
	geometry.vertices.push(new THREE.Vector3(-2.25,-3,-50));
	line1 = new THREE.Line(geometry,material);
	PIEaddElement(line1);


	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(2.25,0,-50));
	geometry.vertices.push(new THREE.Vector3(3.25,0,-50));
	geometry.vertices.push(new THREE.Vector3(3.25,-3,-50));
	geometry.vertices.push(new THREE.Vector3(2.25,-3,-50));
	line2 = new THREE.Line(geometry,material);
	PIEaddElement(line2);


	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(-5.75,-1.5,-50));
	geometry.vertices.push(new THREE.Vector3(-3.25,-1.5,-50));
	line3 = new THREE.Line(geometry,material);
	PIEaddElement(line3);


	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(3.25,-1.5,-50));
	geometry.vertices.push(new THREE.Vector3(5.75,-1.5,-50));
	line4 = new THREE.Line(geometry,material);
	PIEaddElement(line4);

	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(-11.25,-1.5,-50));
	geometry.vertices.push(new THREE.Vector3(-10.25,-1.5,-50));
	line5 = new THREE.Line(geometry,material);
	PIEaddElement(line5);

	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(10.25,-1.5,-50));
	geometry.vertices.push(new THREE.Vector3(11.25,-1.5,-50));
	line6 = new THREE.Line(geometry,material);
	PIEaddElement(line6);

	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(-11.25,-1.5,-50));
	geometry.vertices.push(new THREE.Vector3(-11.25,7,-50));
	line7 = new THREE.Line(geometry,material);
	PIEaddElement(line7);

	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(11.25,-1.5,-50));
	geometry.vertices.push(new THREE.Vector3(11.25,7,-50));
	line8 = new THREE.Line(geometry,material);
	PIEaddElement(line8);
	
	


}


function addLine4()
{

	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(0.75,3,-50));
	geometry.vertices.push(new THREE.Vector3(-0.25,3,-50));
	geometry.vertices.push(new THREE.Vector3(-0.25,0,-50));
	geometry.vertices.push(new THREE.Vector3(0.75,0,-50));
	geometry.vertices.push(new THREE.Vector3(-0.25,0,-50));
	geometry.vertices.push(new THREE.Vector3(-0.25,-3,-50));
	geometry.vertices.push(new THREE.Vector3(0.75,-3,-50));
	line1 = new THREE.Line(geometry,material);
	PIEaddElement(line1);


	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(5.25,3,-50));
	geometry.vertices.push(new THREE.Vector3(6.25,3,-50));
	geometry.vertices.push(new THREE.Vector3(6.25,0,-50));
	geometry.vertices.push(new THREE.Vector3(5.25,0,-50));
	geometry.vertices.push(new THREE.Vector3(6.25,0,-50));
	geometry.vertices.push(new THREE.Vector3(6.25,-3,-50));
	geometry.vertices.push(new THREE.Vector3(5.25,-3,-50));
	line2 = new THREE.Line(geometry,material);
	PIEaddElement(line2);


	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(6.25,0,-50));
	geometry.vertices.push(new THREE.Vector3(7.25,0,-50));
	line3 = new THREE.Line(geometry,material);
	PIEaddElement(line3);


	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(-0.25,0,-50));
	geometry.vertices.push(new THREE.Vector3(-2.75,0,-50));
	line4 = new THREE.Line(geometry,material);
	PIEaddElement(line4);

	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(-7.25,0,-50));
	geometry.vertices.push(new THREE.Vector3(-8.25,0,-50));
	line5 = new THREE.Line(geometry,material);
	PIEaddElement(line5);

	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(-8.25,0,-50));
	geometry.vertices.push(new THREE.Vector3(-8.25,7,-50));
	line6 = new THREE.Line(geometry,material);
	PIEaddElement(line6);

	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(7.25,0,-50));
	geometry.vertices.push(new THREE.Vector3(7.25,7,-50));
	line7 = new THREE.Line(geometry,material);
	PIEaddElement(line7);
	
	

}


function addLine5()
{

var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(0.75,3,-50));
	geometry.vertices.push(new THREE.Vector3(-0.25,3,-50));
	geometry.vertices.push(new THREE.Vector3(-0.25,0,-50));
	geometry.vertices.push(new THREE.Vector3(0.75,0,-50));
	geometry.vertices.push(new THREE.Vector3(-0.25,0,-50));
	geometry.vertices.push(new THREE.Vector3(-0.25,-3,-50));
	geometry.vertices.push(new THREE.Vector3(0.75,-3,-50));
	line1 = new THREE.Line(geometry,material);
	PIEaddElement(line1);


	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(5.25,3,-50));
	geometry.vertices.push(new THREE.Vector3(6.25,3,-50));
	geometry.vertices.push(new THREE.Vector3(6.25,0,-50));
	geometry.vertices.push(new THREE.Vector3(5.25,0,-50));
	geometry.vertices.push(new THREE.Vector3(6.25,0,-50));
	geometry.vertices.push(new THREE.Vector3(6.25,-3,-50));
	geometry.vertices.push(new THREE.Vector3(5.25,-3,-50));
	line2 = new THREE.Line(geometry,material);
	PIEaddElement(line2);


	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(6.25,0,-50));
	geometry.vertices.push(new THREE.Vector3(7.25,0,-50));
	line3 = new THREE.Line(geometry,material);
	PIEaddElement(line3);
 
	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(7.25,0,-50));
	geometry.vertices.push(new THREE.Vector3(7.25,7,-50));
	line4 = new THREE.Line(geometry,material);
	PIEaddElement(line4);
	
	
	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(-7.25,3,-50));
	geometry.vertices.push(new THREE.Vector3(-8.25,3,-50));
	geometry.vertices.push(new THREE.Vector3(-8.25,-3,-50));
	geometry.vertices.push(new THREE.Vector3(-7.25,-3,-50));
	line5 = new THREE.Line(geometry,material);
	PIEaddElement(line5);


	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(-2.75,3,-50));
	geometry.vertices.push(new THREE.Vector3(-1.75,3,-50));
	geometry.vertices.push(new THREE.Vector3(-1.75,0,-50));
	geometry.vertices.push(new THREE.Vector3(-0.25,0,-50));
	geometry.vertices.push(new THREE.Vector3(-1.75,0,-50));
	geometry.vertices.push(new THREE.Vector3(-1.75,-3,-50));
	geometry.vertices.push(new THREE.Vector3(-2.75,-3,-50));
	line6 = new THREE.Line(geometry,material);
	PIEaddElement(line6);	

	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(-8.25,0,-50));
	geometry.vertices.push(new THREE.Vector3(-9.25,0,-50));
	line7 = new THREE.Line(geometry,material);
	PIEaddElement(line7);
	

	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({color:0x000000});
	geometry.vertices.push(new THREE.Vector3(-9.25,0,-50));
	geometry.vertices.push(new THREE.Vector3(-9.25,7,-50));
	line8 = new THREE.Line(geometry,material);
	PIEaddElement(line8);
	


}

