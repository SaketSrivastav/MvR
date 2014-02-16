var go = 0;
var imgCount = 0;

// Declaring class "Timer"
var Timer = function()
{        
    // Property: Frequency of elapse event of the timer in millisecond
    this.Interval = 1000;
    
    // Property: Whether the timer is enable or not
    this.Enable = new Boolean(false);
    
    // Event: Timer tick
    this.Tick;
    
    // Member variable: Hold interval id of the timer
    var timerId = 0;
    
    // Member variable: Hold instance of this class
    var thisObject;
    
    // Function: Start the timer
    this.Start = function()
    {
        this.Enable = new Boolean(true);

        thisObject = this;
        if (thisObject.Enable)
        {
            thisObject.timerId = setInterval(
            function()
            {
                thisObject.Tick(); 
            }, thisObject.Interval);
        }
    };
    
    // Function: Stops the timer
    this.Stop = function()
    {            
        thisObject.Enable = new Boolean(false);
        clearInterval(thisObject.timerId);
    };

};

var index = 0;
	var obj = new Timer();
	obj.Interval = 30;
	obj.Tick = timer_tick;

function allowDrop(ev)
{
ev.preventDefault();
}

function drag(ev)
{
ev.dataTransfer.setData("Text",ev.target.id);
if( go == 0 ){
    go = 1;
	obj.Start();
	$('#runner').runner({
	    countdown:false,
	    startAt: 0,
	    milliseconds: true,
	});
	$('#runner').runner('start');
}
}

function drop(ev)
{
ev.preventDefault();
var data=ev.dataTransfer.getData("Text");
ev.target.appendChild(document.getElementById(data));
	if(document.getElementById(data).title == 200)
	{
	    alert("right");
		document.getElementById(data).style.display = 'none';
		imgCount++;
		if( imgCount == 42 )
		     obj.Stop();
	}
	else
	{
		alert("wrong");
	}
	
}
function drop2(ev)
{
ev.preventDefault();
var data=ev.dataTransfer.getData("Text");
ev.target.appendChild(document.getElementById(data));
//alert(document.getElementById(data).title);
	if(document.getElementById(data).title == 100)
	{
		alert("right");
		document.getElementById(data).style.display = 'none';
		imgCount++;
		if( imgCount == 42 )
		     obj.Stop();
	}
	else
	{
	   alert("wrong");	
	}
	
}


	
	
function timer_tick()
{
	index  = index + 1;
	document.getElementById("divTim").innerHTML =index;
}

function post_fb()
{
    var title = 'My Title';
    var summary = 'This is my summary';
    var url = 'http://www.mydomain.com/path/to/page';
    var image = 'http://www.mydomain.com/images/myimage.png';
 
    window.open('http://www.facebook.com/sharer.php?s=100&p[title]='+encodeURIComponent(title)+'&p[url]='+encodeURIComponent(url)+'&p[summary]='+encodeURIComponent(summary)+'&p[images][0]='+encodeURIComponent(image), '_blank', 'toolbar=0,location=0,menubar=0');
    return false;
}

