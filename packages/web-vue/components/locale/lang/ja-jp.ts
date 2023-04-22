import { ArcoCalendarLang, ArcoLang } from '../interface';

const calendarLang: ArcoCalendarLang = {
  formatYear: 'YYYY 年',
  formatMonth: 'YYYY 年 MM 月',
  today: '今日',
  view: {
    month: '月',
    year: '年',
    week: '週',
    day: '日',
  },
  month: {
    long: {
      January: '一月',
      February: '二月',
      March: '三月',
      April: '四月',
      May: '五月',
      June: '六月',
      July: '七月',
      August: '八月',
      September: '九月',
      October: '十月',
      November: '十一月',
      December: '十二月',
    },
    short: {
      January: '一月',
      February: '二月',
      March: '三月',
      April: '四月',
      May: '五月',
      June: '六月',
      July: '七月',
      August: '八月',
      September: '九月',
      October: '十月',
      November: '十一月',
      December: '十二月',
    },
  },
  week: {
    long: {
      self: '週',
      monday: '月曜日',
      tuesday: '火曜日',
      wednesday: '水曜日',
      thursday: '木曜日',
      friday: '金曜日',
      saturday: '土曜日',
      sunday: '日曜日',
    },
    short: {
      self: '週',
      monday: '月',
      tuesday: '火',
      wednesday: '水',
      thursday: '木',
      friday: '金',
      saturday: '土',
      sunday: '日',
    },
  },
};

const lang: ArcoLang = {
  locale: 'ja-JP',
  empty: {
    description: 'データなし',
  },
  drawer: {
    okText: 'OK',
    cancelText: 'キャンセル',
  },
  popconfirm: {
    okText: 'OK',
    cancelText: 'キャンセル',
  },
  modal: {
    okText: 'OK',
    cancelText: 'キャンセル',
  },
  pagination: {
    goto: '移動',
    page: 'ページ',
    countPerPage: '件/ページ',
    total: '総計 {0} 件',
  },
  table: {
    okText: 'OK',
    resetText: 'リセット',
  },
  upload: {
    start: 'スタート',
    cancel: 'キャンセル',
    delete: '削除',
    retry: 'リトライ',
    buttonText: 'アップロード',
    preview: 'プレビュー',
    drag: 'クリックまたはドラッグしてアップロードします。',
    dragHover: 'ドロップしてアップロードを始めます',
    error: 'アップロード失敗しました',
  },
  calendar: calendarLang,
  datePicker: {
    view: calendarLang.view,
    month: calendarLang.month,
    week: calendarLang.week,
    placeholder: {
      date: '日付を選択',
      week: '週を選択',
      month: '月を選択',
      year: '年を選択',
      quarter: '四半期を選択',
      time: '時間を選択',
    },
    rangePlaceholder: {
      date: ['開始日', '終了日'],
      week: ['開始週', '終了週'],
      month: ['開始月', '終了月'],
      year: ['開始年', '終了年'],
      quarter: ['開始四半期', '終了四半期'],
      time: ['開始時間', '終了時間'],
    },
    selectTime: '時間を選択',
    today: '今日',
    now: '今',
    ok: 'OK',
  },
  image: {
    loading: 'Loading',
  },
  imagePreview: {
    fullScreen: 'フルスクリーン',
    rotateRight: '右回り',
    rotateLeft: '左回り',
    zoomIn: '拡大',
    zoomOut: '縮小',
    originalSize: 'デフォルト',
  },
  typography: {
    copied: 'コピーしました',
    copy: 'コピー',
    expand: '展開',
    collapse: '折る',
    edit: '編集',
  },
  form: {
    validateMessages: {
      required: '#{field} が必要です',
      type: {
        string: 'は有効なテキストタイプではありません',
        number: 'は有効な数値タイプではありません',
        boolean: 'は有効なブール型ではありません',
        array: 'は有効な配列型ではありません',
        object: 'は有効なオブジェクトタイプではありません',
        url: 'は有効なURLアドレスではありません',
        email: 'は有効なメールアドレスではありません',
        ip: 'は有効なIPアドレスではありません',
      },
      number: {
        min: '`#{value}` は最小値 `#{min}` 未満です',
        max: '`#{value}` は最大値 `#{max}` より大きい',
        equal: '`#{value}` は `#{equal}` と等しくありません',
        range: '`#{value}` は範囲 `#{min} ~ #{max}` にありません',
        positive: '`#{value}` は正の数ではありません',
        negative: '`#{value}` は負の数ではありません',
      },
      array: {
        length: '`#{value}` は #{length} と等しくありません',
        minLength: '`#{value}` は少なくとも #{minLength}',
        maxLength: '`#{value}`は最大 #{maxLength}',
        includes: '#{value} には #{includes} は含まれません',
        deepEqual: '#{value} は #{deepEqual} と等しくありません',
        empty: '`#{value}` は空の配列ではありません',
      },
      string: {
        minLength: '最小文字数は #{minLength}',
        maxLength: '最大文字数は #{maxLength}',
        length: '`#{value}` 文字数が #{length} と等しくありません',
        match: '`#{value}` はパターン #{pattern} と一致しません',
        uppercase: '`#{value}` はすべて大文字ではありません',
        lowercase: '`#{value}` はすべて小文字ではありません',
      },
      object: {
        deepEqual: '`#{value}`は#{deepEqual}と等しくありません',
        hasKeys: '`#{value}` にはフィールド #{keys} が含まれていません',
        empty: '`#{value}`はオブジェクトではありません',
      },
      boolean: {
        true: '`true` であると期待します',
        false: '`false` であると期待します',
      },
    },
  },
};

export default lang;
