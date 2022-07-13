function getTotalRGB(imgData) {
    var colors = {
        r: 0,
        g: 0,
        b: 0,
        total: 0
    };
    for (var i = 0; i < imgData.data.length; i += 4) {
        colors.r += imgData.data[i];
        colors.g += imgData.data[i + 1];
        colors.b += imgData.data[i + 2];
        colors.total += 1;
    }
    return colors;
}
function getPercentRGB(imgData) {
    var data = getTotalRGB(imgData);
    var total = data.r + data.g + data.b;
    var percentRed;
    var percentGreen;
    var percentBlue;
    // check if black
    if (total === 0) {
        percentRed = 0.33;
        percentGreen = 0.33;
        percentBlue = 0.33;
    }
    else {
        percentRed = Math.round((data.r / total) * 100) / 100;
        percentGreen = Math.round((data.g / total) * 100) / 100;
        percentBlue = Math.round((data.b / total) * 100) / 100;
    }
    return {
        r: percentRed,
        g: percentGreen,
        b: percentBlue
    };
}
function getAverageColor(imgData) {
    var data = getTotalRGB(imgData);
    var averageRed = Math.floor(data.r / data.total);
    var averageGreen = Math.floor(data.g / data.total);
    var averageBlue = Math.floor(data.b / data.total);
    return {
        r: averageRed,
        g: averageGreen,
        b: averageBlue
    };
}
module.exports = {
    getTotalRGB: getTotalRGB,
    getPercentRGB: getPercentRGB,
    getAverageColor: getAverageColor
};
