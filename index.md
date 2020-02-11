---
title: トップページ
description: 宮城県仙台市で開催する、ゲームマスターがプレイヤーをドラフトするTRPGコンベンション
---

ゲームマスターがプレイヤーをドラフトするTRPGコンベンション「エタコン」は、2020年3月1日（日）に宮城県仙台市・八木山市民センターで開催予定です。

現在、プレイヤー参加者を募集中です。

## 開催概要を教えて！

下記をご覧ください。

日時：2020年3月1日（日）　10:00～19:00  
場所：<a href="http://www.hm-sendai.jp/siminc/sisetu/taihaku06.html" target="_blank">八木山市民センター</a>　和室(1)  
　宮城県仙台市太白区八木山本町1丁目43番地（仙台市地下鉄東西線・八木山動物公園駅下車　西1出口徒歩約1分）  
参加費：運営費を参加者で頭割り（ゲームマスター参加：無料／プレイヤー参加：学生200円、社会人500円を予定）

- コンベンション終了後、開場にオードブルを持ち込んで夕食会を開催します（時間は18:50～20:30を予定。任意参加、参加費別途）。詳細はこのWebページ内の[夕食会って？](#party)をご覧ください。
- 会場近辺でお昼ご飯を買える場所が少ないため、仕出し弁当の取り寄せを検討しています。

## そもそも「エタコン」って何？

宮城県のTRPGプレイヤー「エタフレ」の誕生日を祝うために、2017年3月に開催されたTRPGコンベンションです。  
「今までにない趣向を凝らしたコンベンション」ということで、プレイヤードラフト形式での開催が編み出されました。

時は流れ、2020年3月。3年の時を経て、再びエタコンが開催されます。ぜひ、エタフレの誕生日を祝ってください。
エタフレを知らない方も、心配ご無用。当日会場に来ますので、知り合いになってください。

## ドラフトってどういうこと？

当日のゲームマスターが、「一緒に遊びたい！」と考えるエタフレ（プレイヤー）をドラフト（指名）していきます。

一巡目のドラフトでは、ゲームマスターが好きなエタフレを一斉に指名します。  
エタフレの指名が重複した場合は、どのゲームマスターの卓に入るのかをくじ引きで決定します。

二巡目以降は、ゲームマスターが好きなエタフレを順番に指名していき、ゲームを遊ぶメンバーを構成していきます。

## エタフレを指名するってどういうこと？

プレイヤーで参加する方は、ご予約の際に「エタフレネーム」というハンドルネームのようなものを記載していただきます。  
「エタフレ」を含む名前（例：○○なエタフレ）や、エタフレを連想するような名前にしてください。  
そうすれば、当日はあなたもエタフレです。指名されるのは全員エタフレなのです。

## ゲームマスターに選抜されるの？ 怖くない？

ゲームマスターは、プレイヤー予約時に記載された「エタフレネーム」と「ゲームマスターへのアピールポイント」だけを見てプレイヤーをドラフトします。  
「あなたが誰なのか」は誰にも分かりません。あなた自体が選抜されるわけではありませんので、ドラフトのワクワク感だけを味わいに来てください。

# どんなエタフレが参加するの？

現在、下記のエタフレが参加を予定しています。
<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
<script>
$(function() {
	var url = 'https://spreadsheets.google.com/feeds/cells/1RIYCm7Ob5qlBPGw_UWm1blzpx5dvhfFbwr3TDCehUR4/od6/public/values?alt=json';
	var target = $('#targetdiv');

	/***
	 * 改行関数
	 */
	function nl2br(str) {
		return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br>' + '$2');
	}

	$.getJSON(url, function(data) {
		var list = data.feed.entry;
		var list_length = list.length;
		var cnt = 1; // 行のカラム数
		var content = '';

		for (var i = 0; i < Math.ceil(list_length / cnt); i++) {
			var j = i * cnt;
			var Arr = list.slice(j, j + cnt);

			// テキストを取得
			content += '<li>' + Arr[0].content.$t + '</li>';
		}

		target.append(content);
	});
})
</script>

また、参考までに、前回どんなエタフレが参加したのかもご覧ください。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">本日開催！　「エタコン」プレイヤーのエタフレネーム＆アピールポイントの一覧です！<br>誰が本物のエタフレなのか、推理してみよう！<a href="https://twitter.com/hashtag/%E3%82%A8%E3%82%BF%E3%82%B3%E3%83%B3?src=hash&amp;ref_src=twsrc%5Etfw">#エタコン</a> <a href="https://t.co/rSNOO99oxB">pic.twitter.com/rSNOO99oxB</a></p>&mdash; エタコン@3/1(日)開催 (@etafla20) <a href="https://twitter.com/etafla20/status/845423241577447424?ref_src=twsrc%5Etfw">March 24, 2017</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## まさか、指名漏れってあったりする？

ゲームマスターから申告いただく対応可能プレイヤー人数をもとに予約定員を設けますので、指名漏れはございません。ご安心ください。

## どんなゲームが遊べるの？

※ゲームマスター名は敬称略。

- シノビガミ（ゲームマスター：フェケ）
- 大石油王RPG（ゲームマスター：？？？）
- ストラトシャウト（ゲームマスター：羊毛マトン）
- インセイン（ゲームマスター：さぼりっこ）  
※シナリオ集「みにとまと」のシナリオより
- 新クトゥルフ神話TRPG（ゲームマスター：りょう。）
- 予備卓）ビギニングアイドル（ゲームマスター：ウェイトリ）

（本物の）エタフレに遊びたいシステム等を確認し、スタッフ側でゲームマスターを決めさせていただきました。

ゲーム紹介文等はこのWebサイトに掲載しますが、コンベンションの性質上、遊ぶゲームをプレイヤーが選ぶことはできませんのでご了承ください。  
（「ゲームマスターへのアピールポイント」で遊びたいゲームをアピールすることはできます）

また、エタフレには「[暇な人、好きなものをひたすら語りたい人に100の質問](https://docs.google.com/spreadsheets/d/e/2PACX-1vSCMfFT3BiP50CZcUm-baJu_wCpUMSJtDTUD7b-aCDPWehCyK25OM_71TsYwvBJbr0rI3bf3k3GUbK1/pubhtml?gid=1900505261&single=true)」に答えていただきました。
当日遊べるゲームには、この回答に記載された「好きなもの」を取り入れていただく予定ですので、ぜひご覧ください。

<span id="party"></span>
## 夕食会って？

閉会式終了後、コンベンション会場にオードブルを持ち込み、エタフレの誕生日を祝う夕食会を実施します。

夕食会への参加を希望する場合は、PL予約時にお申し込みいただくか、メール（eternalflamecon☆gmail.com／☆を@に変換）または[Twitter](https://twitter.com/etafla20)までご連絡ください。  
オードブル予約の都合上、2月25日（火）までにご連絡ください。

時間：コンベンション終了後（18:50～20:30予定）  
※途中退出OKです。21:00までには後片付けも終えて完全撤収します。

会費：1,500円（紙コップ、紙皿、割り箸、おしぼり、ソフトドリンク代込）

- 会費は当日の来場時、受付にて頂戴いたします。
- アルコールドリンクの持ち込みもOKですが、「乾杯程度」で。飲酒運転と未成年の飲酒、飲酒強要、セッション中の飲酒はダメ、ゼッタイ。

## TRPGとかコンベンションとか初めてだけど、参加していい？

このページをここまで読み進めてきたあなたなら、大丈夫。  
「なんか変なことやってるなー」って思うかもしれませんが、ドラフトが終われば普通にTRPGを遊ぶことができるはずです。

## わかった、エタコンに参加したい！

ありがとうございます。  
お手数ですが、下記リンク先のプレイヤー予約フォームより、ご予約をお願いします。
先着順となっておりますので、できればお早めにお申し込みいただけると嬉しいです。

- [2020年3月1日（日）エタコン　プレイヤー参加者用事前予約フォーム](https://docs.google.com/forms/d/e/1FAIpQLSepv98Pm_4D7oZw7dqn-bpOYWLJbLO8fczsd_uOTGvoGt7NJA/viewform)

## 前回のゲーム紹介って見れる？

[2017年3月に開催されたエタコンのゲーム紹介文](2017/index.md)を公開しましたので、ご覧ください。

## 運営は誰？

千葉家（ウェイトリ＆千葉千夏）です。彼らは普段、[遊ぶ会](https://trpg.bex.jp)とか[仙台TRPG十年会](https://sendaitrpg.10yearsafter.info)といったTRPGコンベンションを運営しています。

## 連絡先は？

- Mail: eternalflamecon☆gmail.com（☆を@に変換）
- [Twitter: @etafla20](https://twitter.com/etafla20)

<a class="twitter-timeline" data-lang="ja" data-width="600" href="https://twitter.com/etafla20?ref_src=twsrc%5Etfw">Tweets by etafla20</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
