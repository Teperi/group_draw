module.exports = {
    groupInfoCal: function(peopleCount, groupCount) {
        let remainders = peopleCount % groupCount;
        let groupInfo = [];
        for (let i = 0; i < groupCount; i++) {
            if (remainders > 0) {
                groupInfo[i] = {
                    id: i + 1,
                    maxNum: Math.floor(peopleCount / groupCount) + 1
                };
                remainders--;
            } else {
                groupInfo[i] = {
                    id: i + 1,
                    maxNum: Math.floor(peopleCount / groupCount)
                };
            }
        }
        return groupInfo;
    },

    drawFirst: function(groupInfo, peopleArr) {
        let count = [];
        let result = [];
        groupInfo.forEach(element => {
            count.push(element.id);
        });
        for (let i = 0; i < peopleArr.length; i++) {
            count.sort(function(a, b) { return 0.5 - Math.random() });
            if (result[count[0] - 1] == null) {
                result[count[0] - 1] = {
                    id: count[0],
                    names: [peopleArr[i]]
                };
            } else {
                result[count[0] - 1].names.push(peopleArr[i]);
            }

            if (result[count[0] - 1].names.length === groupInfo[count[0] - 1].maxNum) {
                count = count.slice(1);
            }
        }
        console.log(result);
        return result;
    },

    drawSecond: function(groupInfo, peopleArr) {
        let count = [];
        let result = [];
        groupInfo.forEach(element => {
            count.push(element.id);
        });
        for (let i = 0; i < peopleArr.length; i++) {
            count.sort(function(a, b) { return 0.5 - Math.random() });
            if (result[count[0] - 1] == null) {
                result[count[0] - 1] = {
                    id: count[0],
                    names: [peopleArr[i]]
                };
            } else {
                result[count[0] - 1].names.push(peopleArr[i]);
            }

            if (result[count[0] - 1].names.length === groupInfo[count[0] - 1].maxNum) {
                count = count.slice(1);
            }
        }
        console.log(result);
        return result;
    }
};