/*!
 *
 * Jquery Mapael - Dynamic maps jQuery plugin (based on raphael.js)
 * Requires jQuery and Mapael >=2.0.0
 *
 * Map of South_Yorkshire_metropolitan_county
 * 
 * @author rcrowther
 */
(function (factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('jquery'), require('jquery-mapael'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery', 'mapael'], factory);
    } else {
        // Browser globals
        factory(jQuery, jQuery.mapael);
    }
}(function ($, Mapael) {

    "use strict";
    
    $.extend(true, Mapael,
        {
            maps :  {
                south_yorkshire_metropolitan_county : {
                    width : 1376.8407,
                    height : 855.35199,
                    getCoords : function (lat, lon) {
                        // todo
                        return {"x" : long, "y" : lat};
                    },
                    'elems': {
                        "Barnsley" : "m 273.41,401.74 c -29.23,-6.01 -55.71,-26.67 -84.91,-17.52 -26.29,-24.14 -31.44,18.94 -55.01,19.76 -16.93,7.48 -4.41,45.49 -30.71,27.46 -25.95,-3.64 -49.19,-16.35 -72.82,-3.93 -8.54,-19.79 26.83,-53.7 -10.41,-57.98 1.05,-8.3 16.28,-17.38 -5.26,-14.67 C -7.51,359.07 3.27,313.61 3.73,326.46 15.77,282.19 56.22,309.28 87.64,297.25 c 29.41,-5.33 52.11,-29.66 56.17,-56.25 28.16,-10.03 31.27,24.83 58.7,14.46 15.09,0.51 30.91,4.9 27.46,-12.88 18.55,-12.98 54.69,-0.16 69.96,-17.27 5.01,-20.7 32.73,-19.79 15.68,-40.15 1.14,-19.81 40.87,-31.92 16.78,-54.28 22.23,-4.74 53.74,-6.57 70.37,18.26 12.17,28.39 27.06,-11.99 46.31,2.9 12.29,-3.91 19.91,0.3 24.27,-12.72 1.03,39.16 37.27,-5.81 54.94,-13.52 11.98,-21.78 18.57,10.98 32.4,0.61 17.89,16.15 49.01,29.51 69.85,9.21 29.23,-13.97 42.44,30.57 43.78,52.71 19.1,2.14 18.36,51.27 43.84,58.21 27.06,-1.81 60.68,34.05 44.44,54.6 7.68,9.63 36.8,10.34 9.51,17.68 18.61,14.09 3.8,35.07 -17.71,28.87 -22.85,8.74 -40.82,2.34 -63.23,1.19 -30.2,4.29 -61.11,-7.67 -82.25,22.37 -24.75,3.29 -17.53,33.71 -39.24,40.47 -8.73,13.48 -23.75,-20.13 -31.51,2.36 -8.75,5.15 -1.95,39.01 -14.95,32.26 -13.17,-14.77 -34.16,-16.98 -48.52,-31.24 -4.23,26.07 -40.12,49.19 -34.53,76.53 1.66,15.84 -17.37,50.69 -38.13,31.22 -17.91,-4.99 -6.35,-23.35 -13.02,-31.94 33.2,-1.13 3.44,-34.42 7.84,-46.15 -17.34,-31.01 -55.8,-30.43 -87.18,-43.13 -13.59,-1.17 -19.03,3.37 -36.27,0.11 z",
                        "Doncaster" : "m 987.39,68.37 c 14.46,-15.32 15.55,-39.92 42.57,-38.43 31.42,-6.31 66.54,4.08 91.57,-16.99 28.92,5.87 52.59,-15.08 82.44,-7.78 31.76,1.17 65.07,-0.64 93.56,16.19 22.06,11.48 44.62,22.17 68.4,29.25 18.38,29.76 -29.65,58.73 -21.85,93.08 -8.48,28.26 -26.38,66.79 -10.73,87.8 -25.83,21.15 19.74,66 -12.59,73.18 -23.97,2.57 -64.48,-3.26 -65.59,31.35 -2.3,23.34 34.97,20.89 17.06,48.45 -11.72,34.25 -47.44,46.24 -68.57,70.39 -7.79,26.69 -7.41,65.11 -29.79,85.86 -12.13,8.44 -30.15,36.79 -37.75,8.72 -21.4,3.9 -42.43,15.89 -62.89,6.72 -12.07,13.71 -33.23,5.61 -37.33,31.67 -8.28,28.05 -23.95,4.62 -43.68,10.47 -23.03,-1.43 -19.09,-24.94 -8.52,-34.61 -14.34,-8.87 -41.67,6.96 -42.67,-20.64 -16.45,-4.82 -38.52,-13.28 -46.81,3.76 -21.76,-0.96 -62.94,4.34 -58.6,-25.47 -28.77,7.95 -16.2,-33.12 -23.48,-42.76 -11.1,-20.17 27.55,-50.82 -13.1,-57.45 -18.95,-4.45 -44.1,40.96 -47.27,1.68 18.82,-15.57 7.84,-23.91 -9.85,-29.88 -25.6,-21.79 -1.93,-58.98 28.82,-45.29 22.82,-11.68 -7.12,-31.43 11.57,-35.68 -35,-3.33 -2.2,-41.85 -33.41,-53.85 -31.25,-9.3 -55.74,-26.94 -65,-61.2 3,-26.47 41.02,14.89 60.74,4.48 27.86,-5.25 41.09,-35.83 68.44,-41.15 0.47,-12.73 2.45,-14.08 10.19,-18.04 -3.68,-15.57 5.79,-16.91 4.11,-32.84 9.12,-7.23 29.51,0.28 23.83,-13.73 40.01,-1.24 -4.92,-54.9 36.45,-48.81 24.19,26.76 49.73,-5.67 78.03,1.3 7.88,6.28 13.12,15 21.68,20.27 z",
                        "Rotherham" : "m 894.76,831.33 c -1.08,28.29 -35.1,12.23 -46.47,9.75 -16.59,18.73 -43.5,13.53 -57.82,-4.11 -20.45,-0.68 -47.26,-18.72 -25.14,-38.85 -1.71,-14.23 -35.33,-31.49 -33.88,-7.05 -22.78,17.89 -16.5,-28.8 -20.07,-40.53 -12.14,-19.86 -24.59,-42.07 -46.23,-52.77 -14.5,-14.76 -27.38,-30.63 -44.33,-42.03 15.83,-11.72 26.08,-31.02 9.28,-48.96 -10.77,-12.15 -18.79,-37.2 2.46,-38.2 -4.55,-23.23 -38.32,13.75 -46.19,-9.55 -19.99,-21.48 -43.97,-42.14 -45.92,-73.51 -1.66,-20.99 -22.28,-36.3 -6.95,-53.67 -5.3,-24.43 19.36,-28.35 34.53,-17.3 19.44,-7.85 17.95,-35.29 36.91,-43.34 21.07,-17.19 46.12,-27.82 72.21,-21.23 16.57,0.01 48.57,-1.79 55.01,6.98 -7.61,22.63 11.7,44.23 31.24,47.69 -8.69,10.76 -18.1,28.74 -1.64,36.02 15.31,-14.62 39.79,-29.3 57.16,-7.4 9.94,19.76 -24.62,28.78 -5.01,48.38 3.7,12.33 -4.53,50.44 22.68,39.57 -1.74,15.12 7.18,27.71 24.04,18.92 14.5,-7.82 38.23,20.52 41.09,-6.56 18.52,9.14 46.53,-1.49 49.61,27.41 10.5,2.52 44.87,-7.77 26.94,13.06 -17.39,24.08 24.94,25.57 35.77,25.16 8.9,16.57 -0.61,29.89 -16.02,33.01 -15.76,15.75 9.3,53.76 -23.65,59.03 -12.59,17.32 20.38,17.17 5.19,33.65 -13.64,10.46 -40.61,-13.12 -29.06,14.6 3.28,22.89 43.19,-1.02 26.46,22.71 -22.5,12.38 -37.5,29.04 -51.98,47 -16.14,-2.31 -23.52,9.79 -30.19,22.11 z",
                        "City of Sheffield" : "m 273.41,401.74 c 23.71,1.17 45.45,-4.16 71.25,11.99 28.49,-1.7 55,25.55 54.65,45.83 12.23,17.05 6.75,31.38 -11.54,32.36 5.75,13.33 -0.5,32.66 24.72,34.49 14.63,10.96 26.57,-24.18 28.92,-32.61 -12.03,-28.45 31.49,-50.49 31.8,-78.47 15.27,7.4 29.07,20.62 45.95,25.21 14.94,19.84 25.13,43.41 25.76,68.05 10.01,25.99 39.33,37.65 49.36,63.79 5.1,-14.76 59.3,-13.86 31.99,-0.42 -21.66,5 12.46,40.51 12.15,57.16 12.41,12.19 -39.27,28.65 -8.38,33.54 20.69,15.77 31.23,36.68 53.45,46.83 18.25,24.33 34.5,40.01 31.04,74.7 -8.32,8.2 -13.55,49.39 -32.09,29.98 -21.19,-6.01 -23.13,16.43 -44.87,3.08 -42.1,5.08 7.79,-52.89 -30.57,-49.05 -11.35,-4.36 -17.4,-16.35 -23.13,2.22 -16.99,8.34 -41.04,-11.15 -52.25,13.87 -12.16,3.06 -7.87,1.42 -12.69,8.24 23.52,16.79 -17.42,28.17 -30.72,21.38 -23.53,4.37 -43.2,7.89 -63.24,17.04 -8.56,2.5 -14.52,26.82 -31.81,11.41 -16.53,7.76 -22.89,-0.77 -12.27,-13.11 -4.02,-20.44 -41.02,14.89 -34.68,-10.03 0.14,-28.7 -24.53,12.65 -26.18,6.88 -4.46,-26.61 -23.33,-18.25 -38.88,-7.19 -19.21,-12.83 8.01,-38.3 17.33,-53.74 -4.35,-15.61 43.58,-4.14 27.34,-18.47 -31.01,-3.53 -50.74,-22.32 -77.72,-34.07 -42.62,-11.1 -3.68,-46.56 -6.93,-71.6 -14.41,-5.08 -29.23,-9.72 -40.93,-23.74 -25.38,2.09 -34.62,-12.85 -33.16,-34.28 -17.48,-19.55 -37.9,11.59 -50.59,-14.14 -14.21,-10.04 -1.29,-26.64 -12.69,-39.22 12.56,-17.31 3.2,-44.28 0.75,-61.4 -23.16,6.63 -40.11,-8.95 -49.89,-26.31 -14.38,2.13 -36.13,-17.59 -8.96,-17.64 20.9,-5.58 51.39,6 73,13.08 3.56,-17.07 7.67,-37.58 30.21,-38.58 7.05,-23.61 28.31,-24.7 47.05,-13.45 27.72,-13.17 50.39,15.34 77.46,16.42 z"
                    }
                }
            }
        }
    );

    return Mapael;

}));