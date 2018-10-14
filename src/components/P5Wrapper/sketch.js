export default function(p) {
  let onReady = () => {};
  let props = {};

  function intensity_curve(num_slits, slit_dist, wavelength, max_intensity, theta) {
    var k = 2 * Math.PI / wavelength;
    var phi = k * slit_dist * Math.sin(theta);
    var intensity = max_intensity * Math.pow((Math.sin(num_slits * phi / 2) / Math.sin(phi / 2)), 2);

    return intensity;
  }

  p.setOnReady = function(cb) {
    onReady = cb;
  };

  p.pushProps = function(_props) {
    props = _props;
  }

  p.setup = function() {
    p.createCanvas(900, 600);
    console.log("::: displayDensity:", p.displayDensity());
    console.log("::: pixelDensity:", p.pixelDensity());
    onReady();
    p.mousePressed();
  }

  p.draw = function() {
    p.clear();

    let n = props.slidern;
    let d = props.sliderd;
    let lambda = props.sliderl;
    let Io = props.slideri;

    p.beginShape();
    for (var theta_ = -Math.PI / 4; theta_ <= Math.PI / 4; theta_ += (Math.PI / 800)) {
      var x = (theta_ + (Math.PI / 4)) * 800;
      var y = p.height - (p.height / 4 + intensity_curve(n, d, lambda, Io, theta_));
      p.curveVertex(x, y);

    }
    p.endShape();
  }

  p.mousePressed = function() {
    p.redraw(); 
  }
}