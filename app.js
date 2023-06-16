function genQR() {
  let api = "https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
  let image = document.getElementById("img");
  let text = document.getElementById("qrText").value;
  let size = document.getElementById("size").value;

  if (text !== "" && size == "100") {
    image.src = api + "100x100" + "&chl=" + text;
  } else if (text !== "" && size == "150") {
    image.src = api + "150x150" + "&chl=" + text;
  } else if (text !== "" && size == "200") {
    image.src = api + "200x200" + "&chl=" + text;
  } else if (text !== "" && size == "250") {
    image.src = api + "250x250" + "&chl=" + text;
  } else if (text !== "" && size == "300") {
    image.src = api + "300x300" + "&chl=" + text;
  } else {
    alert("Please Enter Text");
  }
}
