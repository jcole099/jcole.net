function polyDraw(borderWidth) {
  let polyGrid = getComputedStyle(document.body).getPropertyValue('--path');

  //gets poly width & height
  let polyWidth = document.getElementById('poly').clientWidth;
  let polyHeight = document.getElementById('poly').clientHeight;

  //testing body width
  // let bodyWidth = document.body.clientWidth;
  // console.log(bodyWidth);

  //clean up grid string
  let points = polyGrid.replace(/,/g, '');
  points = points.replace(/%/g, '');
  points = points.split(' ');

  let p1w, p1h, p2w, p2h, p3w, p3h, p4w, p4h;
  p1w = Math.round((parseInt(points[0]) / 100) * polyWidth) - borderWidth;
  p1h = Math.round((parseInt(points[1]) / 100) * polyHeight) - borderWidth;
  p2w = Math.round((parseInt(points[2]) / 100) * polyWidth) + borderWidth;
  p2h = Math.round((parseInt(points[3]) / 100) * polyHeight) - borderWidth;
  p3w = Math.round((parseInt(points[4]) / 100) * polyWidth) + borderWidth;
  p3h = Math.round((parseInt(points[5]) / 100) * polyHeight) + borderWidth;
  p4w = Math.round((parseInt(points[6]) / 100) * polyWidth) - borderWidth;
  p4h = Math.round((parseInt(points[7]) / 100) * polyHeight) + borderWidth;

  //Set Poly Border
  document.getElementById(
    'polyBorder'
  ).style.clipPath = `polygon(${p1w}px ${p1h}px, ${p2w}px ${p2h}px, ${p3w}px ${p3h}px, ${p4w}px ${p4h}px)`;
}

export default polyDraw;
