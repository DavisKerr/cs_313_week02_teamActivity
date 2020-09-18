function alertButton()
{
  alert("Clicked!")
}

function changeColor()
{
  var color = document.getElementById('color').value;
  errors = document.getElementById('errorMsg');
  if(validateColor(color) == true)
  {
    var divider = document.getElementsByClassName('colorful')[0];
    divider.style.backgroundColor = color;
    errors.innerHTML = '';
  }
  else
  {
    errors.innerHTML = 'Not a valid hex color. Remember the format is #000000'
  }
  
}

function validateColor(color)
{
  const regex = RegExp('^#[a-f|A-F|0-9]{6}$');
  var result = regex.test(color);
  return result;
}