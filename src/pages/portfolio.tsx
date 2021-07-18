import * as React from "react"
import Layout from "../components/layout"
import { Heading1, Heading2, Li, Ul } from "../styles/main"
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
                    <Li>情報学群 情報科学類</Li>
                    <Li>WORD編集部</Li>
                    <Li>文化系サークル 写真部さくら組</Li>
                    <Li>
                        学園祭実行委員会 情報メディアシステム局 (2019 -2020)
                    </Li>
                </Ul>
            </Li>
        </Ul>
        <Heading2>活動・実績等</Heading2>
        <Ul>
            <Li>2021年度 セキュリティ・キャンプ全国大会 Y-I トラック 受講生</Li>
            <Li>応用情報技術者試験 合格</Li>
        </Ul>
        <Heading2>興味分野</Heading2>
        <Ul>
            <Li>グラフィックス処理</Li>
            <Li>インフラ</Li>
            <Li>OS</Li>
        </Ul>
        <Heading2>よく使うもの</Heading2>
        <Ul>
            <Li>
                Arch Linux
                <Ul>
                    <Li>ゲームに関係しない開発環境</Li>
                </Ul>
            </Li>
            <Li>
                Docker
                <Ul>
                    <Li>Nginx や Spigot などをホストして遊びます</Li>
                </Ul>
            </Li>
            <Li>
                Nginx
                <Ul>
                    <Li>
                        普通にプロキシとして用いるほか、HLS
                        の配信サーバなどにも使います
                    </Li>
                </Ul>
            </Li>
            <Li>
                GLSL
                <Ul>
                    <Li>
                        テクスチャに "焼いた"
                        バイナリをデコードするなど、面白いシェーダーを作っています
                    </Li>
                </Ul>
            </Li>
            <Li>
                C/C++
                <Ul>
                    <Li>主に大学の講義で使用</Li>
                    <Li>
                        Linux
                        の簡単なカーネルモジュールを作る実験などをやっています
                    </Li>
                </Ul>
            </Li>
            <Li>
                Python
                <Ul>
                    <Li>電卓</Li>
                </Ul>
            </Li>
            <Li>
                C#
                <Ul>
                    <Li>Unity における開発に使用します</Li>
                </Ul>
            </Li>
        </Ul>
        <Heading2>職歴</Heading2>
        <Ul>
            <Li>
                アルバイト
                <Ul>
                    <Li>倉庫作業 (衣類・イベント用品)</Li>
                    <Li>イベントスタッフ</Li>
                    <Li>集団塾講師 (小中学生向け理系科目)</Li>
                    <Li>大学のVR関係の研究室で制作補助</Li>
                </Ul>
            </Li>
        </Ul>
        <Heading2>趣味</Heading2>
        <Ul>
            <Li>VR</Li>
            <Li>
                中国語
                <Ul>
                    <Li>
                        「一般的な中学三年生の英語」程度の読み書きができます
                    </Li>
                    <Li>会話は厳しいです</Li>
                </Ul>
            </Li>
            <Li>
                写真
                <Ul>
                    <Li>Nikon D-5300 を使ってます</Li>
                    <Li>単焦点 マニュアル縛り</Li>
                </Ul>
            </Li>
            <Li>
                料理
                <Ul>
                    <Li>中華料理がすきです</Li>
                    <Li>アジなどの小さな魚を捌けます</Li>
                </Ul>
            </Li>
        </Ul>
    </Layout>
)

export default IndexPage
