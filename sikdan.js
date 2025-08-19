const mealData = {
    // 날짜별 식단 예시 (YYYY-MM-DD)
    '2025-08-19': {
        breakfast: {
            menu: '현미밥, 달걀찜, 시금치나물, 두유',
            calories: 420
        },
        lunch: {
            menu: '닭가슴살 샐러드, 고구마, 미역국',
            calories: 530
        },
        dinner: {
            menu: '연어구이, 브로콜리, 현미밥, 김치',
            calories: 480
        }
    },
    '2025-08-20': {
        breakfast: {
            menu: '오트밀, 바나나, 견과류, 저지방우유',
            calories: 410
        },
        lunch: {
            menu: '소고기불고기, 쌈채소, 잡곡밥, 된장국',
            calories: 540
        },
        dinner: {
            menu: '두부조림, 시금치나물, 고등어구이, 현미밥',
            calories: 470
        }
    },
    '2025-08-21': {
        breakfast: {
            menu: '통밀토스트, 삶은계란, 아보카도, 저지방우유',
            calories: 430
        },
        lunch: {
            menu: '닭가슴살구이, 브로콜리, 감자, 현미밥',
            calories: 520
        },
        dinner: {
            menu: '소고기무국, 잡곡밥, 나박김치, 시금치나물',
            calories: 480
        }
    },
    '2025-08-22': {
        breakfast: {
            menu: '고구마, 삶은계란, 두유, 사과',
            calories: 400
        },
        lunch: {
            menu: '연어샐러드, 현미밥, 미역국',
            calories: 510
        },
        dinner: {
            menu: '닭가슴살야채볶음, 잡곡밥, 김치',
            calories: 470
        }
    },
    '2025-08-23': {
        breakfast: {
            menu: '오트밀, 블루베리, 견과류, 저지방우유',
            calories: 420
        },
        lunch: {
            menu: '두부샐러드, 고구마, 미역국, 현미밥',
            calories: 530
        },
        dinner: {
            menu: '소고기불고기, 쌈채소, 잡곡밥, 된장국',
            calories: 480
        }
    },
    '2025-08-24': {
        breakfast: {
            menu: '통밀토스트, 삶은계란, 바나나, 두유',
            calories: 410
        },
        lunch: {
            menu: '닭가슴살구이, 브로콜리, 감자, 현미밥',
            calories: 520
        },
        dinner: {
            menu: '연어구이, 브로콜리, 현미밥, 김치',
            calories: 470
        }
    },
    '2025-08-25': {
        breakfast: {
            menu: '고구마, 삶은계란, 두유, 사과',
            calories: 400
        },
        lunch: {
            menu: '두부샐러드, 고구마, 미역국, 현미밥',
            calories: 530
        },
        dinner: {
            menu: '닭가슴살야채볶음, 잡곡밥, 김치',
            calories: 470
        }
    },
    // ...더 많은 날짜별 식단 추가 가능
};

function getMeal(dateStr) {
    // 날짜가 없으면 랜덤 식단 추천
    if (mealData[dateStr]) return mealData[dateStr];
    const keys = Object.keys(mealData);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return mealData[randomKey];
}
