const move = () => {
    // 指定の相対位置へ移動
    gsap.to(".circle", { x: 200 });

    // 同じ対象へ2つ以上に分けて指示しても合成される。
    // gsap.to(".circle", { x: 100 }); 
    // gsap.to(".circle", { y: 100 }); 

    // 指定の相対位置から移動
    // gsap.from(".circle", { x: 100, y: 100 }); 

    // 始点と終点の相対位置を指定
    // gsap.fromTo(".circle",   { x: -100, y: -100 }, { x: 100, y: 100 }); 

    // 指定の相対位置へ一瞬で移動
    // gsap.set(".circle", { x: 100, y: 100 }); 
};

const colorAndDuration = () => {
    // 時間指定、色の変更
    gsap.to(".circle", { duration: 2, x: 200, backgroundColor: '#ff9000' });
};

const rotation = () => {
    // 回転
    gsap.to('.box', { duration: 3, x: 100, rotation: 360 });
    // class への指定を id 指定で上書き
    // 拡大
    gsap.to('#b1', { duration: 3, x: 200, scale: 2 });
    // 縮小
    gsap.to('#b3', { duration: 3, x: 30, scale: 0.5 });
};

const repeat = () => {
    // 要素を直接指定してもよい
    const c1 = document.getElementById('c1');
    const c2 = document.getElementById('c2');
    gsap.to(c1, { duration: 1, repeat: 2, x: 100 });
    gsap.to(c2, { duration: 1, repeat: 2, y: 30 });

    // 要素の配列も指定できる
    const circles = document.querySelectorAll(".circle");
    gsap.to(circles, { duration: 1, repeat: 2, backgroundColor: '#ff9000' });
};

const delay = () => {
    // 開始時間の遅延
    gsap.to('#b1', { duration: 3, x: 100, rotation: 360 });
    gsap.to('#b2', { delay: 0.5, duration: 2.5, x: 100, rotation: 360 });
    gsap.to('#b3', { delay: 1, duration: 2, x: 100, rotation: 360 });
};

const easing = () => {
    // いろいろ試してみましょう。    
    // https://greensock.com/docs/v3/Eases
    // power1, sine などの後ろに
    // .in（開始時） .out（終了時） .inOut（両方）を付けます

    // Easingなし
    gsap.to('#b1', { duration: 2, x: 100, rotation: 360, ease: 'none' });
    // 最初は速く、最後は遅い。UI向け。
    gsap.to('#b2', { duration: 2, x: 100, rotation: 360, ease: 'power1.out' });
    // 最初はとても遅く、最後は速い。加速感。
    // gsap.to('#b2', { duration: 2, x: 100, rotation: 360, ease: 'power3.in' });
    // 最後にバウンス（跳ねる）
    gsap.to('#b3', { duration: 2, x: 100, rotation: 360, ease: 'bounce.out' });
}

move();
// colorAndDuration();
// rotation();
// repeat();
// delay();
// easing();