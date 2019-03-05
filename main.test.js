const seedingModule = require('./main.js');

const testArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'];
const rule = {
    groupCount: 5,
    peopleCount: testArr.length
};
let firstDraw = [];
let secondDraw = [];

const groupInfo = seedingModule.groupInfoCal(rule.peopleCount, rule.groupCount);
firstDraw = seedingModule.drawFirst(groupInfo, testArr);
secondDraw = seedingModule.drawSecond(firstDraw);


test('조별 배치를 위한 기본자료 가져오기', () => {
    expect(rule).not.toBeUndefined();
    expect(firstDraw).not.toBeNull();
})

test('조별 인원수 계산', () => {
    expect(groupInfo).toHaveLength(rule.groupCount);
    expect(groupInfo[0].maxNum).toEqual(5);
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

test('첫번째 조와 두번째 조가 안겹치는지 체크', () => {
    // 1번째 조편성의 1개 결과 가져오기
    firstDraw.forEach(firElement => {
        // 1개 결과 내 이름
        firElement.names.forEach(nameCheck => {
            // 1번째 조편성 내 이름을 제외한 다른 이름 Array 생성
            const firOtherNames = firElement.names.filter(ele => ele != nameCheck);
            // 2번째 조편성의 1개 결과 가져오기
            secondDraw.forEach(secElement => {
                // 내 이름이 2번째 조편성에 어디에 있는지 찾기
                function correctName(tempName) {
                    return tempName === nameCheck;
                }
                const indexNum = secElement.names.findIndex(correctName);
                // 2번째 조편성 안에서 내 이름을 찾았다면
                if (indexNum !== -1) {
                    //2번째 조편성 내 이름을 제외한 다른 이름 Array 생성
                    const secOtherNames = secElement.names.filter(ele2 => ele2 != nameCheck);
                    //다른 이름 Array 끼리 비교하면서 겹치는 이름이 있는지 확인
                    firOtherNames.forEach(nameTest => {
                        function overlapName(tempName2) {
                            return tempName2 === nameTest;
                        }
                        const indexOverlapName = secOtherNames.find(overlapName);
                        expect(indexOverlapName).toBeUndefined();
                    })
                }
            })
        })
    });
})