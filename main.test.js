const seedingModule = require('./main.js');

const testArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const rule = {
    groupCount: 5,
    peopleCount: testArr.length
};
let firstDraw = Array();

const groupInfo = seedingModule.groupInfoCal(rule.peopleCount, rule.groupCount);
firstDraw = seedingModule.drawFirst(groupInfo, testArr);
secondDraw = seedingModule.drawSecond(groupInfo, testArr);


test('조별 배치를 위한 기본자료 가져오기', () => {
    expect(rule).not.toBeUndefined();
    expect(firstDraw).not.toBeNull();
})

test('조별 인원수 계산', () => {
    expect(groupInfo).toHaveLength(rule.groupCount);
    expect(groupInfo[0].maxNum).toEqual(6);
    expect(groupInfo[1].maxNum).toEqual(5);
    expect(groupInfo[2].maxNum).toEqual(5);
    expect(groupInfo[3].maxNum).toEqual(5);
    expect(groupInfo[4].maxNum).toEqual(5);
})

test('각 조별 첫번째 인원 체크', () => {
    for (let i = 0; i < firstDraw.length; i++) {
        expect(firstDraw[i].names).toHaveLength(groupInfo[i].maxNum);
    }
})

test('각 조별 두번째 인원 체크', () => {
    for (let i = 0; i < secondDraw.length; i++) {
        expect(secondDraw[i].names).toHaveLength(groupInfo[i].maxNum);
    }
})

test('각 조별 ')