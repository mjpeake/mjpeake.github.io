  var styles = [];
  styles.push({ colors: ["#3F3244", "#60495A", "#A9ACA9", "#BFC3BA"], backgroundColor: "#2F2235", density: 50 });
  styles.push({ colors: ["#F9F9F9", "#191919", "#F9F9F9"], backgroundColor: "#191919", density: 100 });
  styles.push({ colors: ["#003554", "#006494", "#0582CA", "#00A6FB"], backgroundColor: "#051923", density: 75 });
  styles.push({ colors: ["#7209b7", "#b5179e", "#f72585", "#4cc9f0", "#4895ef", "#4361ee"], backgroundColor: "#3a0ca3", density: 100 });
  styles.push({ colors: ["#a3b18a", "#588157", "#3a5a40", "#344e41"], backgroundColor: "#dad7cd", density: 75 });
  styles.push({ colors: ["#002626", "#0E4749", "#002626"], backgroundColor: "#002626", density: 25 });
  styles.push({ colors: ["#151515", "#A63D40", "#151515", "#E9B872", "#151515"], backgroundColor: "#151515", density: 75 });

  $(document).ready(function () {
    index = Math.floor(Math.random() * styles.length);
    WavingTiles.WavingTiles("showcase", styles[index].colors, styles[index].backgroundColor, styles[index].density);
  });