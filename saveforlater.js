/*function createTextNodes (numNodes, radius, top, left) {
  var nodes = [];
  var width = (radius * 2);
  var angle, x, y, i;

  for (i = 0; i < numNodes; i++) {
    angle = ((i / (numNodes / 2)) * Math.PI);
    x = ((radius * Math.cos(angle)) + (width / 2)) + left;
    y = ((radius * Math.sin(angle)) + (width / 2) + 15) + top;

    nodes.push({
      x: x,
      y: y
    });
  }

  return nodes;
}*/
