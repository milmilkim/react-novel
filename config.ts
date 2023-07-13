/** 스타일 관련 설정 */
const STYLE = {
  PRIMARY_COLOR: '#ff3272ff',
  BACKGROUND_COLOR: '#f8f5f3',
};


/** 프로그레시브 웹앱 관련 설정 */
const PWA = {
  APP_NAME: 'YOUR APP', // 기본 이름
  APP_SHORT_NAME: 'APP', // 짧은 이름
  APP_THEME_COLOR: STYLE.PRIMARY_COLOR, // 테마 컬러 (기본값: PRIMARY_COLOR)
  APP_BACKGROUND_COLOR: STYLE.BACKGROUND_COLOR, // 배경색
  DESCRIPTION: 'DESCRIPTION' // 앱 설명
};

/** 기타 설정 */
const META = {
  TITLE: 'YOUR APP', // 브라우저 탭에 표시되는 이름
  THEME_COLOR: STYLE.PRIMARY_COLOR, // 모바일 브라우저 주소 창 색
};

export { PWA, STYLE, META };
