# 尾道さんぽ（Onomichi Explorer）

広島県尾道市の尾道水道周辺を、国土地理院の測量データと空中写真から再現した、ブラウザで遊べる3D探索ゲームです。

**▶ プレイする: https://michinaoshimizu.github.io/onomichi-sanpo/**

A browser-based 3D exploration game set around the Onomichi Channel in Hiroshima, Japan, recreated from GSI survey data and aerial photographs.

## 遊び方 / How to play

- WebGL に対応したブラウザで上のリンクを開くだけです。PC でもスマートフォンでも遊べます。
- 初回は地図データをダウンロードするため、少し時間がかかります。
- 徒歩・自転車・ボート・ドローンで、坂道の路地から千光寺山、水道の上まで自由に移動できます。
- ランドマークを訪ねたり、街に隠れた猫を探したりすると、旅の手帖に記録されます。
- 季節や太陽の位置、潮の満ち引きは現実の日付と時刻に合わせて変わります。

操作方法はゲーム内のポーズメニュー（Esc）で確認できます。タッチ操作にも対応しています。

Open the link above in any WebGL-capable browser, on desktop or mobile. Controls are listed in the in-game pause menu (Esc).

## このリポジトリについて / About this repository

このリポジトリはゲームの公開専用です。`gh-pages` ブランチの内容は自動で生成され、公開のたびに丸ごと置き換わります。ソースコードは公開していないため、プルリクエストは受け付けていません。

This repository only hosts the published game. The `gh-pages` branch is generated automatically and replaced on every release. The source code is not public, and pull requests are not accepted.

## ライセンス / License

Copyright (c) 2026 Michinao Shimizu. All rights reserved.

個人で遊ぶこと、スクリーンショットや動画を SNS などで紹介することは自由です。それ以外の複製・改変・再配布・転載・商用利用などについては [LICENSE](LICENSE) をご覧ください。

You are free to play the game for personal use and to share screenshots and videos. See [LICENSE](LICENSE) for everything else.

## クレジット / Credits

- 地図データ・空中写真: 「地理院タイル」（国土地理院）を加工して作成 — Map data and aerial photographs: GSI Tiles, Geospatial Information Authority of Japan, processed by the author ([利用規約 / Terms of Use](https://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html))
- [three.js](https://threejs.org/) (MIT License)
