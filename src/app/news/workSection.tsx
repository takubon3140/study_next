

"use client";

export default function workSection() {


    return (
        <section id="work" className="max-w-4xl mx-auto mb-8">

            <p className="text-4xl font-semibold mb-2 border-b-2 border-indigo-400 pb-2">
                Work
            </p>

            <figure className="p-4 rounded-lg shadow-lg bg-white">
                <h3 className="text-2xl font-bold text-gray-700 mb-4 mt-2 border-b-2 border-gray-200 pb-2">
                    医療系スマホアプリ、管理画面の開発
                </h3>
                <table className="w-full text-gray-900">
                    <tbody>
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-2 px-4 font-semibold">担当</td>
                            <td className="py-2 px-4">スマホアプリエンジニア、サーバーサイドエンジニア</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-2 px-4 font-semibold">使用技術</td>
                            <td className="py-2 px-4">Flutter(Dart)、Firebase(Cloud Messaging)、Laravel</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-2 px-4 font-semibold">プラットフォーム</td>
                            <td className="py-2 px-4">iOS、Android、Web</td>
                        </tr>
                        <tr className="hover:bg-gray-100">
                            <td className="py-2 px-4 font-semibold">チーム構成</td>
                            <td className="py-2 px-4">1~2人</td>
                        </tr>
                    </tbody>
                </table>
            </figure>
        </section>
    );
}
