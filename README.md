# X/Twitter VTuber 音樂心得 Skill

![X/Twitter VTuber 音樂心得 Skill Banner](assets/banner.svg)

參考你的發文語氣，先爬取 X/Twitter 熱文、官方來源與近期討論，再用音樂製作人或 VTuber staff 視角，產出適合 X/Twitter 傳播的繁體中文心得、thread、引用轉推與產業短評。

## 功能

- 個人語氣校準：可依你的 X/Twitter 帳號、貼文樣本或草稿抽取句型、節奏、口頭禪與觀點強度。
- 熱門話題研究：優先查 X/Twitter 熱文、官方帳號、YouTube、官網公告、活動與音樂平台資料。
- 心得創作：把原創曲、翻唱、MV、3D live、演唱會、專輯與產業事件寫成像你本人會發的高傳播貼文。
- 專業視角：從編曲、混音、聲線設計、舞台、鏡頭、營運與粉絲情緒切入。
- 台灣繁中：全程使用繁體中文與台灣社群語感。
- X/Twitter 推送：提供腳本發布單則貼文或 thread；發布前必須由使用者確認。

## 安裝本 Skill

```bash
cd twitter-vtuber-music-writer
npm install
```

## 安裝 Codex

Codex CLI 是 OpenAI 的本機終端 coding agent。官方目前建議 macOS/Linux 使用 standalone installer：

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

第一次啟動：

```bash
codex
```

首次執行會提示登入，可使用 ChatGPT 帳號或 API key。更新 standalone 版本時，重新執行同一個 installer 即可。

Windows 可原生在 PowerShell 使用 Codex，或在需要 Linux-native 環境時使用 WSL2；詳細設定請參考 [OpenAI Codex CLI 官方文件](https://developers.openai.com/codex/cli)。

## 安裝 Claude Code

Claude Code 是 Anthropic 的 coding agent。官方快速開始目前推薦 Native Install：

macOS、Linux、WSL：

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

Windows PowerShell：

```powershell
irm https://claude.ai/install.ps1 | iex
```

Windows CMD：

```cmd
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```

也可使用套件管理器安裝：

```bash
brew install --cask claude-code
winget install Anthropic.ClaudeCode
npm install -g @anthropic-ai/claude-code
```

安裝後在專案目錄啟動：

```bash
claude
```

首次執行會提示登入，可使用 Claude 訂閱、Claude Console，或企業雲端提供商帳戶。若使用 npm 安裝，官方文件建議使用 Node.js 18 或更新版本，並避免 `sudo npm install -g`。更多安裝選項請參考 [Claude Code 官方快速開始](https://code.claude.com/docs/zh-TW/quickstart) 與 [Advanced setup](https://code.claude.com/docs/en/getting-started)。

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

參考我的 X 發文語氣，先爬最近熱門的 VTuber 原創曲話題，再寫一篇心得。
```

```text
/twitter-vtuber-music-writer

這是我平常的貼文樣本：[貼 5-10 則]
請先爬熱文，再用我的語氣寫一則音樂製作人視角的心得。
```

```text
/twitter-vtuber-music-writer

用 VTuber staff 角度分析這場 3D live，寫成 7 則 thread，語氣要像我平常在 X 上碎念。
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
├── assets/
│   └── banner.svg
├── reference/
│   ├── viral_style.md
│   ├── personal_voice_style.md
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
