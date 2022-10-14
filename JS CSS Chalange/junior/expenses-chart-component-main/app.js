
function hiddenValue() {
    for (i=1; i<8; i++) 
    {
        var values = "value" + i;
        values = document.getElementById(values);
        values.style.visibility = "hidden"; 
    };
};


function showHide(c,v) 
{
    var charts = "chart" + c;
    var values = "value" + v;

    charts = document.getElementById(charts);
    values = document.getElementById(values); 
    
    charts.addEventListener("mouseover", function handleMouseOver() 
    {
        values.style.visibility = "visible";
    });

    charts.addEventListener("mouseout", function handleMouseOut() 
    {
        values.style.visibility = "hidden";
    });
};

hiddenValue();
showHide(1,1)
showHide(2,2)
showHide(3,3)
showHide(4,4)
showHide(5,5)
showHide(6,6)
showHide(7,7)
