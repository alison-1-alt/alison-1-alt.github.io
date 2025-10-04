// arr = ["Mael","Eric","Randall","James"];
// for (var i=0; i < arr.length; i++)
// {
//   document.writeln(arr[i],"<br>");
// }
var webmaps=
[
  ["Zillo", "https://www.zillow.com/", "Zillow makes searching for a new home accessible for the general public."],
  ["Map Quest", "https://www.mapquest.com/", "Map Quest allows users to make traveling plans easier."]
];
function welcome()
{
  let a = "Please enter your name.";
  let b = "Type your name here.";
// A prompt box is used to prompt users to input a value before entering a page.
  user_name = window.prompt(a,b);
  message = "<h1>Hello, welcome to my webpage," + user_name + "!</h1>"
  return message
}
document.write(welcome());
functiton webmap_table()
{
  document.write("<table width=100%>");
  for (var row=0; row < webmaps.length; row++)
  {
    document.write("<tr>");
    for (var column=0; column < webmaps[0].length; column++)
    {
      document.write("<td>" + webmaps[row][column] + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
  return "";
}
