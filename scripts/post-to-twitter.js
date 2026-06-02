#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const { TwitterApi } = require("twitter-api-v2");

dotenv.config();

function parseArgs(argv) {
  const args = {
    content: null,
    thread: false,
    yes: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--content") args.content = argv[++i];
    else if (arg === "--thread") args.thread = true;
    else if (arg === "--yes") args.yes = true;
    else if (arg === "--help" || arg === "-h") args.help = true;
  }

  return args;
}

function usage() {
  console.log(`Usage:
  npm run post -- --content drafts/post.txt
  npm run post -- --content drafts/thread.txt --thread --yes

Options:
  --content <path>  貼文內容檔案
  --thread          將空白行分隔的段落發布成 thread
  --yes             確認發布；未提供時只會 dry-run
`);
}

function readContent(filePath) {
  if (!filePath) throw new Error("缺少 --content <path>");
  const absolutePath = path.resolve(process.cwd(), filePath);
  return fs.readFileSync(absolutePath, "utf8").trim();
}

function splitThread(content) {
  return content
    .split(/\n\s*\n/g)
    .map((tweet) => tweet.trim())
    .filter(Boolean);
}

function assertCredentials() {
  const required = [
    "TWITTER_API_KEY",
    "TWITTER_API_SECRET",
    "TWITTER_ACCESS_TOKEN",
    "TWITTER_ACCESS_SECRET",
  ];

  const missing = required.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(`缺少 X/Twitter API 憑證：${missing.join(", ")}`);
  }
}

function showDryRun(tweets) {
  console.log("Dry-run：尚未發布。加上 --yes 才會推送到 X/Twitter。");
  tweets.forEach((tweet, index) => {
    console.log("");
    console.log(`--- Tweet ${index + 1}/${tweets.length} (${[...tweet].length} 字) ---`);
    console.log(tweet);
  });
}

async function postTweets(tweets) {
  assertCredentials();

  const client = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY,
    appSecret: process.env.TWITTER_API_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessSecret: process.env.TWITTER_ACCESS_SECRET,
  });

  let replyToTweetId = null;
  for (const tweet of tweets) {
    const payload = replyToTweetId
      ? { text: tweet, reply: { in_reply_to_tweet_id: replyToTweetId } }
      : { text: tweet };

    const response = await client.v2.tweet(payload);
    replyToTweetId = response.data.id;
    console.log(`已發布：${replyToTweetId}`);
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    usage();
    return;
  }

  const content = readContent(args.content);
  const tweets = args.thread ? splitThread(content) : [content];

  showDryRun(tweets);

  if (!args.yes) return;
  await postTweets(tweets);
}

main().catch((error) => {
  console.error(`錯誤：${error.message}`);
  process.exit(1);
});

