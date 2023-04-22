import { ArcoCalendarLang, ArcoLang } from '../interface';

const calendarLang: ArcoCalendarLang = {
  formatYear: 'YYYY',
  formatMonth: 'MMM YYYY',
  today: '요즘',
  view: {
    month: '달',
    year: '년',
    week: '주',
    day: '일',
  },
  month: {
    long: {
      January: '일월',
      February: '이월',
      March: '행진',
      April: '사월',
      May: '오월',
      June: '유월',
      July: '칠월',
      August: '팔월',
      September: '구월',
      October: '시월',
      November: '십일월',
      December: '십이월',
    },
    short: {
      January: '일월',
      February: '이월',
      March: '행진',
      April: '사월',
      May: '오월',
      June: '유월',
      July: '칠월',
      August: '팔월',
      September: '구월',
      October: '시월',
      November: '십일월',
      December: '십이월',
    },
  },
  week: {
    long: {
      self: '주',
      monday: '월요일',
      tuesday: '화요일',
      wednesday: '수요일',
      thursday: '목요일',
      friday: '금요일',
      saturday: '토요일',
      sunday: '일요일',
    },
    short: {
      self: '주',
      monday: '월',
      tuesday: '화',
      wednesday: '수',
      thursday: '목',
      friday: '금',
      saturday: '토',
      sunday: '일',
    },
  },
};

const lang: ArcoLang = {
  locale: 'ko-KR',
  empty: {
    description: '데이터 없음',
  },
  drawer: {
    okText: '결정',
    cancelText: '취소',
  },
  popconfirm: {
    okText: '결정',
    cancelText: '취소',
  },
  modal: {
    okText: '결정',
    cancelText: '취소',
  },
  pagination: {
    goto: '이동',
    page: '페이지',
    countPerPage: '기입 / 페이지',
    total: '총 {0}',
  },
  table: {
    okText: '결정',
    resetText: '초기화',
  },
  upload: {
    start: '스타트',
    cancel: '취소',
    delete: '지우다',
    retry: '다시 시도를 클릭',
    buttonText: '클릭 업로드',
    preview: '시사',
    drag: '여기에서 업로드 할 파일을 클릭하거나 드래그하세요',
    dragHover: '파일을 해제하고 업로드 시작',
    error: '업로드 실패',
  },
  calendar: calendarLang,
  datePicker: {
    view: calendarLang.view,
    month: calendarLang.month,
    week: calendarLang.week,
    placeholder: {
      date: '날짜를 선택하세요',
      week: '주를 선택하세요',
      month: '달을 선택하세요',
      year: '연도를 선택하세요',
      quarter: '분기를 선택하세요',
      time: '선택 기간',
    },
    rangePlaceholder: {
      date: ['시작일', '종료일'],
      week: ['주 시작', '주 종료'],
      month: ['시작 월', '종료 월'],
      year: ['시작 년도', '연말'],
      quarter: ['분기 시작', '분기 종료'],
      time: ['시작 시간', '종료 시간'],
    },
    selectTime: '선택 기간',
    today: '요즘',
    now: '지금',
    ok: '결정',
  },
  image: {
    loading: '로딩',
  },
  imagePreview: {
    fullScreen: '전체 화면',
    rotateRight: '오른쪽으로 회전',
    rotateLeft: '왼쪽으로 회전',
    zoomIn: '확대',
    zoomOut: '축소',
    originalSize: '원래 크기',
  },
  typography: {
    copy: '복사',
    copied: '복사 됨',
    edit: '편집하다',
    collapse: '겹',
    expand: '전개 하 다',
  },
};

export default lang;
