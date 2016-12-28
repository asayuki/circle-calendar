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

/*function createLineNodes (numNodes, skip, end, radius, top, left) {
  var line = [];
  var width = (radius * 2);
  var angle, x, y, i;
  for (i = 0; i < numNodes; i++) {
    angle = (i / (numNodes / 2)) * Math.PI;
    x = ((radius * Math.cos(angle)) + (width / 2)) + left;
    y = ((radius * Math.sin(angle)) + (width / 2) + 15) + top;

    if (i => skip && i <= end) {
      line.push({
        x: x,
        y: y
      });
    }
  }

  return line;
}*/

/*for (var i = 0; i < numDatesThisMonth; i++) {
  weekDay = new Date(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (i+1));
  weekDay = weekDay.getDay();
  item = snap.text(numberCircleNodes[i].x, numberCircleNodes[i].y, (i + 1)).attr({
    'font-size': 14,
    'fill': '#000000'
  });
  item.attr({
    dx: '-' + (item.node.clientWidth / 2),
    dy: '-' + (item.node.clientHeight / 2)
  });
//  item = snap.text(dayCircleNodes[i].x, dayCircleNodes[i].y, weekDays[weekDay]).attr({
//    'font-size': 14,
//    'fill': '#000000'
//  });
//  weekDay = null;
}
//for (var i = 0; i < eventOne.length; i++) {
//  snap.text(eventOne[i].x, eventOne[i].y, weekDays[i]).attr({
//    'font-size': 14,
//    'fill': '#000000'
//  });
//}

/*var ssimplePath = snap.path("M0 0S50 25 100 100S100 50 200 100").attr({
  stroke: 'red',
  'stroke-width': 2,
  fill: 'transparent'
});*/

//var meep = '';
//for (var i = 0; i < eventOne.length; i++) {
//  meep += parseInt(eventOne[i].x) + ' ' + parseInt(eventOne[i].y) + ' ';
//}
//console.log(meep);
