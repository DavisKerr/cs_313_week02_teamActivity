function alertButton()
{
  alert("Clicked!")
}
/*
function changeColor()
{
  var colorPicker = document.getElementById('color');
  var color = colorPicker.value;
  errors = document.getElementById('errorMsg');

  if (validateColor(color) == true)
  {
    var divider = document.getElementsByClassName('colorful')[0];
    divider.style.backgroundColor = color;
    errors.innerHTML = '';
    colorPicker.value = '';
  }
  else
  {
    errors.innerHTML = 'Not a valid hex color. Remember the format is #000000'
  }
  
}
*/
function validateColor(color)
{
  const regex = RegExp('^#[a-f|A-F|0-9]{6}$');
  var result = regex.test(color);
  return result;
}

$(document).ready(function(){
  

  $("#colorChange").click(function(){

    color = $("#color").val();
    if (validateColor(color))
    {
      $(".colorful").first().css("background-color", color);
      $("color").val('');
    }
    else
    {
      $("#errorMsg").text('Invalid hex code. Please us the format #000000');
    }

  });

  $("#vanish").click(function(){

    divider = $(".colorful").last();
    if(divider.css("display") == 'flex')
    {
      divider.css("display", "none");
      $("#vanish").text("Reappear");
    }
    else
    {
      divider.css("display", "flex");
      $("#vanish").text("Vanish");
    }
    

  });

});