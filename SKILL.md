---
name: twitter-vtuber-music-writer
description: 以音樂製作人或 VTuber staff 視角撰寫高傳播 X/Twitter 內容。當使用者要寫推文、X thread、VTuber 產業觀察、原創曲/翻唱/MV/3D live/演唱會/專輯分析、熱門話題爆文、社群貼文改寫、繁體中文台灣用語、或要求先爬取熱門話題再創作並推送到 Twitter/X 時使用。發布前必須取得使用者明確核准。
---

# X/Twitter VTuber 音樂爆文

## 核心原則

- 一律使用繁體中文，符合台灣社群用語；避免中國大陸用語與簡體字。
- 先做熱門話題研究，再創作；不可直接憑印象寫「最新」內容。
- 視角預設為「音樂製作人 / VTuber staff / live 製作現場觀察者」，把技術、企劃、粉絲情緒與產業機制寫進去。
- 內容要適合 X/Twitter：短句、強鉤子、高資訊密度、可被轉推引用。
- 不要自動發布。只有使用者明確說「發布」「推送」「現在發」並確認最終稿後，才可執行發布腳本。

## 工作流

### Step 1：釐清任務

判斷使用者要的是：

| 任務 | 輸出 |
| --- | --- |
| 單則爆文 | 1 則 180-260 字推文，附 3-5 個標籤候選 |
| Thread | 5-9 則串文，每則保留轉推空間 |
| 引用轉推 | 1 則引用角度，先給原貼脈絡再給觀點 |
| 產業短評 | 1 則主貼 + 2 則延伸回覆 |
| 發布到 X/Twitter | 先列最終稿與風險檢查，取得明確同意後執行 Step 6 |

### Step 2：爬取熱門話題

必須瀏覽網路並優先查原始來源：

- X/Twitter 官方帳號、藝人/團體/製作人/staff 帳號
- YouTube MV、直播待機室、官方社群、官網公告
- 音樂平台、唱片公司、活動主辦、場館公告
- 可靠媒體、訪談、排行榜或播放數資料

整理至少 3 個可用訊號：

- 話題：發生了什麼，時間點是什麼
- 證據：連結、日期、數據或官方說法
- 可寫角度：音樂製作、舞台製作、營運策略、粉絲情緒、商業模式
- 風險：未證實傳聞、爭議、翻譯不確定、需避免的措辭

### Step 3：選擇寫作角度

依任務讀取對應參考：

| 風格 | 使用情境 | 參考 |
| --- | --- | --- |
| 高傳播爆文 | 熱門事件、原創曲、重大 live、產業轉折 | [viral_style.md](reference/viral_style.md) |
| 製作現場拆解 | MV、編曲、混音、3D live、舞台設計 | [writing_style.md](reference/writing_style.md) |
| 清單方法論 | 「為什麼會紅」「3 個原因」「staff 怎麼做」 | [checklist_methodology_style.md](reference/checklist_methodology_style.md) |
| 反常識觀點 | 需要尖銳但不失準的產業評論 | [contrarian_opinion_style.md](reference/contrarian_opinion_style.md) |
| 故事情緒 | 畢業、周年、重大演唱會、粉絲情緒 | [story_emotional_style.md](reference/story_emotional_style.md) |
| 資源盤點 | 歌單、演出、近期事件整理 | [resource_roundup_style.md](reference/resource_roundup_style.md) |

### Step 4：創作

輸出前先做 5 個候選鉤子，選最適合的一個展開。

推文結構：

1. 第一行放最強判斷，不鋪陳。
2. 第二段補證據或現場觀察。
3. 第三段給製作人/staff 視角的解釋。
4. 結尾留下可回覆的問題、判斷或情緒餘韻。

Thread 結構：

1. 第 1 則：一句主論點 + 為什麼現在值得看。
2. 第 2-4 則：事實與製作細節。
3. 第 5-7 則：產業機制、staff 決策、粉絲情緒。
4. 最後一則：收束成一句可轉推的觀點。

### Step 5：安全與品質檢查

發布前確認：

- 沒有簡體字。
- 日期、數據、名稱、團體、歌曲、活動資訊都有來源。
- 未把推測寫成事實；推測要標示「我會這樣判斷」「可能」「從製作角度看」。
- 沒有誹謗、未證實爆料、隱私資訊或煽動攻擊。
- 未超過 X/Twitter 字數限制；thread 每則都能獨立閱讀。

### Step 6：推送到 X/Twitter（需明確核准）

若使用者要求發布：

1. 先展示最終稿、來源列表與風險提醒。
2. 詢問使用者是否確認發布。
3. 只有在使用者明確確認後，才執行：

```bash
npm run post -- --content drafts/post.txt --yes
```

Thread 可使用：

```bash
npm run post -- --content drafts/thread.txt --thread --yes
```

憑證需放在 `.env`：

```bash
TWITTER_API_KEY=
TWITTER_API_SECRET=
TWITTER_ACCESS_TOKEN=
TWITTER_ACCESS_SECRET=
```

## 常見請求

| 使用者請求 | 做法 |
| --- | --- |
| 幫我寫一篇 VTuber 原創曲爆文 | 先爬熱門話題與官方來源，再用 viral_style.md 寫單則推文 |
| 用 staff 角度分析這場 3D live | 搜尋演出資訊，讀 writing_style.md，寫 thread |
| 幫我追最近熱門 VTuber 音樂話題 | 瀏覽最新來源，列 3-5 個可寫題材與角度 |
| 寫完直接推到 Twitter | 先給最終稿，等使用者確認後才執行發布 |

