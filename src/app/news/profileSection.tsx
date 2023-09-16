"use client";

import Image from 'next/image';

export const profileSection = <section id="profile" className="max-w-4xl mx-auto mb-10">
    <div className="mt-20 text-4xl font-semibold mb-2 border-b-2 border-indigo-400 pb-2">Profile</div>

    <div className="text-base mb-8">
        1993年生まれ、大阪出身。趣味はテキサスホールデム、野球(観戦も!)、
        トライアスロン(最近始めました)。大阪大学基礎工学部、同大学院を卒業後、大阪のSierに就職してサーバーサイドエンジニアとして従事。その後フリーランスエンジニアとして活動。最近はFlutterをよく使います。 2匹の猫に溺愛。
    </div>
    <div className="flex gap-8">
        <Image
            src="/image/profile_cat.jpg" // 画像のパス
            alt="profile image"
            height={100}
            width={100} // 幅を指定
            objectFit="contain" // ここで指定
        />
        <Image
            src="/image/profile_cat2.jpg" // 画像のパス
            alt="profile image"
            width={100}  // 画像の幅
            height={100} // 画像の高さ
            objectFit="contain" // ここで指定
        />
        <Image
            src="/image/try_asron_kaihin.jpg" // 画像のパス
            alt="profile image"
            width={100}  // 画像の幅
            height={100} // 画像の高さ
            objectFit="contain" // ここで指定
        />
    </div>



</section >;
