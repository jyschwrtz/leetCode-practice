/**
 * @param {number[]} stations
 * @param {number} K
 * @return {number}
 */
var minmaxGasDist = function(stations, K) {
    let minStation = stations[0];
    let maxStation = stations[stations.length - 1];
    let totalDistance = maxStation - minStation;

    let maxDistArr = [];
    for (let i = 0; i < stations.length - 1; i++) {
        let tempDistance = stations[i + 1] - stations[i];
        if (maxDistArr.length < K) {

        }
    }

};
