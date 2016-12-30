var Cc = (function () {

  /**
   * Get number of days in given month of year
   *
   * @param month
   * @param year
   * @return days
   */
  function getDaysInMonth (month, year) {
    return /8|3|5|10/.test(--month)?30:month==1?(!(year%4)&&year%100)||!(year%400)?29:28:31;
  }

  /**
   * Polar to cartesian
   * @param centerX
   * @param centerY
   * @param radius
   * @param angleInDegrees
   * @return obj.x
   * @return obj.y
   */
  function polarToCartesian (centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees) * Math.PI / 180.0;

    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  /**
   * Animate SVG path
   * @param path
   * @param time
   * @param reverse
   */
  function animatePath () {
    var pathLength = path.getTotalLength();

    path.style.transition = path.style.WebkitTransition = 'none';
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = (reverse) ? '-' + length : length;
    path.getBoundingClientRect();
    path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset ' + time + 's ease-in-out';
    path.style.strokeDashoffset = '0';
  }

  /**
   * Circle Calendar
   */
  var ccVars = {};
  var cc = function (svg, opts) {

    var that = this;
    var weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    var dateToday = new Date();

    ccVars.svg = Snap('#svg');
    ccVars.centerX = ccVars.svg.node.viewBox.baseVal.width / 2;
    ccVars.centerY = ccVars.svg.node.viewBox.baseVal.height / 2;
    ccVars.currentMonth = dateToday.getMonth() + 1;
    ccVars.currentYear = dateToday.getFullYear();
    ccVars.daysInCurrentMonth = getDaysInMonth(ccVars.currentMonth, ccVars.currentYear);

    // img.attr('xlink:href', 'images/02.png')

    /**
     * Add event to the calendar
     * @param
     */
    that.addEvent = function () {

    }

  };

  return cc;

})();
