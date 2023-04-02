import * as React from "react"
import Layout from "../components/layout"
import { Heading1, Heading2, Heading3, Li, Ul, A } from "../styles/main"
import Seo from "../components/seo"

const IndexPage: React.FC = () => (
    <Layout>
        <Seo title="ホーム" />
        <Heading1>私について</Heading1>
        <Heading2>所属</Heading2>
        <Ul>
            <Li>
                筑波大学
                <Ul>
                    <Li>大学院 理工情報生命学術院 システム情報工学研究群 情報理工学位プログラム (2023 -)</Li>
                    <Li>情報学群 情報科学類 (2019 - 2023)</Li>
                    <Li>WORD編集部</Li>
                    <Li>文化系サークル 写真部さくら組</Li>
                    <Li>
                        学園祭実行委員会 情報メディアシステム局 (2019 - 2020)
                    </Li>
                </Ul>
            </Li>
        </Ul>
        <Heading2>活動・実績等</Heading2>
        <Ul>
            <Li>2021年度 セキュリティ・キャンプ全国大会 Y-I トラック</Li>
            <Li>応用情報技術者試験 合格</Li>
            <Li>普通自動車免許 (眼鏡等)</Li>
            <Li>第二種電気工事士</Li>
        </Ul>

        <Heading2>好きなもの</Heading2>
        <Ul>
            <Li>
                Arch Linux
                <Ul>
                    <Li>おすすめのディストリビューションです</Li>
                </Ul>
            </Li>
            <Li>
                HLSL
                <Ul>
                    <Li>見た目が面白いものを作れるといいなって思ってます</Li>
                    <Li>
                        Unity 向けに
                        <A to="https://twitter.com/sh1mc/status/1301379146644254721?s=20&t=IUwU60nCImybHKmd97N_Hw">おかしなシェーダー</A>
                        を書いたことがあります
                    </Li>
                </Ul>
            </Li>
            <Li>
                コーヒー
                <Ul>
                    <Li>一日に数回豆を挽いて淹れてます</Li>
                </Ul>
            </Li>
            <Li>
                自動車
                <Ul>
                    <Li>アクセルを踏むと前に進むので、大変面白いです</Li>
                </Ul>
            </Li>
            <Li>
                中国語
                <Ul>
                    <Li>大学で人文系の方々にまじって 3 年ぐらい勉強しています</Li>
                    <Li>易しめの新聞記事とかは読めると思います</Li>
                    <Li>日本人高校生の英語ぐらいはしゃべれると思います</Li>
                </Ul>
            </Li>
            <Li>
                韓国語
                <Ul>
                    <Li>大学で半年ぐらいやりました</Li>
                    <Li>ハングルは読めますが、文章も単語もおぼつかないです</Li>
                </Ul>
            </Li>
            <Li>
                メタバース
                <Ul>
                    <Li>VRChat を 12000 時間ぐらいやってます</Li>
                </Ul>
            </Li>
        </Ul>

        <Heading2>できること</Heading2>
        <Ul>
            <Li>C++ と Python は日常的に使います</Li>
            <Li>Rust、C#、JavaScript、HLSL などは、沢山調べながら作りたいものが作れると思います</Li>
            <Li>
                Linux が使えます
                <Ul>
                    <Li>大学の講義でカーネルの実装を読んだり弄ったりしてました</Li>
                </Ul>
            </Li>
        </Ul>


        <Heading2>職歴</Heading2>

        <Heading3>現在</Heading3>
        <Ul>
            <Li>
                インターン
                <Ul>
                    <Li>機械学習フレームワークの開発をしています</Li>
                    <Li>C++ でマルチプラットフォーム向けテンソル計算機を書いてます</Li>
                </Ul>
            </Li>
        </Ul>

        <Heading3>過去</Heading3>
        <Ul>
            <Li>
                倉庫作業 (日雇い)
                <Ul>
                    <Li>アパレルブランドの服を畳む仕事</Li>
                    <Li>レンタル機材倉庫でメッチャクチャ重い 200 kg ぐらいの台車を押す仕事</Li>
                </Ul>
            </Li>
            <Li>
                集団塾講師
                <Ul>
                    <Li>小中学生向けの理科・算数・英語</Li>
                    <Li>非受験生を対象に教えてました</Li>
                </Ul>
            </Li>
            <Li>VR 関係の研究室でコンテンツ制作補助</Li>
        </Ul>

    </Layout>
)

export default IndexPage
