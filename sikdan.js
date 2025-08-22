// 월별 제철 식재료
const seasonalIngredients = {
    1: ['굴', '무', '배추', '감귤'],
    2: ['딸기', '시금치', '대파', '방울토마토'],
    3: ['쑥', '달래', '봄동', '주꾸미'],
    4: ['참외', '냉이', '멸치', '아스파라거스'],
    5: ['오이', '양파', '토마토', '감자'],
    6: ['자두', '오징어', '깻잎', '애호박'],
    7: ['복숭아', '옥수수', '가지', '토마토'],
    8: ['옥수수', '복숭아', '가지', '토마토', '참외'],
    9: ['고구마', '배', '버섯', '사과'],
    10: ['밤', '대하', '무', '배추'],
    11: ['귤', '호박', '고등어', '무'],
    12: ['굴', '배추', '감귤', '고구마']
};

// 다양한 식단 종류
const breakfastMenus = [
    '현미밥, 달걀찜, 시금치나물, 두유',
    '오트밀, 바나나, 견과류, 저지방우유',
    '통밀토스트, 삶은계란, 아보카도, 저지방우유',
    '고구마, 삶은계란, 두유, 사과',
    '블루베리 요거트볼, 그래놀라, 우유',
    '토마토샐러드, 닭가슴살, 두유',
    '제철과일, 오트밀, 견과류, 우유'
];
const lunchMenus = [
    '닭가슴살 샐러드, 고구마, 미역국',
    '소고기불고기, 쌈채소, 잡곡밥, 된장국',
    '두부샐러드, 고구마, 미역국, 현미밥',
    '연어샐러드, 현미밥, 미역국',
    '잡채, 제철나물, 잡곡밥, 김치',
    '해물파전, 오이무침, 현미밥',
    '제철해산물덮밥, 나박김치, 된장국',
    '불고기, 잡채, 제철나물, 잡곡밥',
    '해산물비빔밥, 제철야채, 김치',
    '제철버섯볶음, 닭가슴살, 현미밥'
];
const dinnerMenus = [
    '연어구이, 브로콜리, 현미밥, 김치',
    '닭가슴살야채볶음, 잡곡밥, 김치',
    '소고기무국, 잡곡밥, 나박김치, 시금치나물',
    '두부조림, 시금치나물, 고등어구이, 현미밥',
    '제철버섯구이, 닭가슴살, 현미밥',
    '해산물볶음, 제철야채, 잡곡밥',
    '제철생선구이, 나물, 현미밥, 김치'
];

// 특식 메뉴 (수요일, 일요일 점심)
const specialLunchMenus = [
    '불고기, 잡채, 제철나물, 잡곡밥',
    '해산물비빔밥, 제철야채, 김치',
    '제철해산물덮밥, 나박김치, 된장국',
    '잡채, 제철나물, 잡곡밥, 김치',
    '해물파전, 오이무침, 현미밥'
];

function getDayOfWeek(year, month, day) {
    // 0: 일요일, 1: 월요일 ...
    return new Date(year, month - 1, day).getDay(); // month는 1~12로 들어오므로 -1 필요
}

function getMeal(dateStr) {
    // YYYY-MM-DD
    const [year, month, day] = dateStr.split('-').map(Number);
    const dayOfWeek = getDayOfWeek(year, month, day);
    // 제철 식재료
    const ingredients = seasonalIngredients[month] || [];
    // 아침
    const breakfastIdx = (year + month + day) % breakfastMenus.length;
    let breakfastMenu = breakfastMenus[breakfastIdx] + `, ${ingredients[breakfastIdx % ingredients.length]}`;
    // 점심
    let lunchMenu;
    if (dayOfWeek === 0 || dayOfWeek === 3) { // 일요일(0), 수요일(3)
        const specialIdx = (year + month + day) % specialLunchMenus.length;
        lunchMenu = specialLunchMenus[specialIdx] + `, ${ingredients[specialIdx % ingredients.length]}`;
    } else {
        const lunchIdx = (year + month + day) % lunchMenus.length;
        lunchMenu = lunchMenus[lunchIdx] + `, ${ingredients[lunchIdx % ingredients.length]}`;
    }
    // 저녁
    const dinnerIdx = (year + month + day) % dinnerMenus.length;
    let dinnerMenu = dinnerMenus[dinnerIdx] + `, ${ingredients[dinnerIdx % ingredients.length]}`;
    // 칼로리 계산(대략)
    const breakfastCal = 380 + breakfastIdx * 10;
    const lunchCal = 500 + (dayOfWeek === 0 || dayOfWeek === 3 ? 60 : 0) + ((year + month + day) % 30);
    const dinnerCal = 470 + dinnerIdx * 8;
    return {
        breakfast: {
            menu: breakfastMenu,
            calories: breakfastCal
        },
        lunch: {
            menu: lunchMenu,
            calories: lunchCal
        },
        dinner: {
            menu: dinnerMenu,
            calories: dinnerCal
        }
    };
}

