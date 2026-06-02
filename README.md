# X/Twitter VTuber 音樂爆文 Skill

以音樂製作人或 VTuber staff 視角，先爬取熱門話題，再產出適合 X/Twitter 傳播的繁體中文貼文、thread、引用轉推與產業短評。

## 功能

- 熱門話題研究：優先查官方 X/Twitter、YouTube、官網公告、活動與音樂平台資料。
- 爆文創作：把原創曲、翻唱、MV、3D live、演唱會、專輯與產業事件寫成高傳播貼文。
- 專業視角：從編曲、混音、聲線設計、舞台、鏡頭、營運與粉絲情緒切入。
- 台灣繁中：全程使用繁體中文與台灣社群語感。
- X/Twitter 推送：提供腳本發布單則貼文或 thread；發布前必須由使用者確認。

## 安裝

```bash
cd twitter-vtuber-music-writer
npm install
```

## 設定 X/Twitter API

複製 `.env.example` 為 `.env`，填入 X Developer Portal 取得的憑證：

```bash
cp .env.example .env
```

```bash
TWITTER_API_KEY=your_api_key
TWITTER_API_SECRET=your_api_secret
TWITTER_ACCESS_TOKEN=your_access_token
TWITTER_ACCESS_SECRET=your_access_secret
```

## 使用範例

```text
/twitter-vtuber-music-writer

先幫我爬最近熱門的 VTuber 原創曲話題，再用音樂製作人的角度寫一則 X 爆文。
```

```text
/twitter-vtuber-music-writer

用 VTuber staff 角度分析這場 3D live，寫成 7 則 thread，繁體中文，適合台灣 X。
```

```text
/twitter-vtuber-music-writer

確認發布剛剛那串 thread 到 Twitter。
```

## 發布

單則貼文：

```bash
npm run post -- --content drafts/post.txt --yes
```

Thread：

```bash
npm run post -- --content drafts/thread.txt --thread --yes
```

未加 `--yes` 時只會 dry-run 顯示內容，不會發布。

## 資料夾

```text
twitter-vtuber-music-writer/
├── SKILL.md
├── README.md
├── package.json
├── .env.example
├── reference/
│   ├── viral_style.md
│   ├── writing_style.md
│   ├── checklist_methodology_style.md
│   ├── contrarian_opinion_style.md
│   ├── story_emotional_style.md
│   ├── resource_roundup_style.md
│   └── extraction_dimensions.md
└── scripts/
    └── post-to-twitter.js
```

## 注意

- 發布前務必確認來源、日期、名稱與字數。
- 不把傳聞寫成事實。
- 不自動發布未經使用者確認的內容。
- `.env` 不可提交到 Git。
