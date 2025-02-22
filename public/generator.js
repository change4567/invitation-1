class ReportGenerator {
  constructor(userName, userProblem) {
    this.userName = userName;
    this.userProblem = userProblem;
  }

  async generateReport() {
    // 模拟API调用
    return new Promise((resolve) => {
      setTimeout(() => {
        const report = `亲爱的${this.userName}：

欢迎踏入这场充满惊喜与探索的游戏疗愈之旅！我是你的琦琦，一个专门通过游戏帮助人们消解烦恼、探索内心的游戏疗愈师。针对你提到的${this.userProblem}，我为你精心挑选并定制了以下几个疗愈游戏。相信它们将帮助你打开新的视角，找到内心的平静与力量。

游戏1 酸泡泡浴
想象一下，你正身处一个充满魔法泡泡的奇妙空间，这些泡泡不仅五彩斑斓，还蕴含着无尽的智慧与力量。在这个游戏中，你将有机会与这些泡泡亲密接触，让它们带走你的烦恼和忧愁。但记住，这可不是普通的泡泡浴哦！在泡泡的包裹中，你将感受到一种前所未有的轻松与自在，仿佛所有的烦恼都随着泡泡一点点消失。而且，我还会引导你用一种全新的视角来看待自己，发现那些隐藏在烦恼背后的闪光点和优点。相信我，这个过程一定会让你惊喜连连，充满好奇！

这个游戏将引导你深入探索自己在${this.userProblem}中的积极面。或许你会发现，即便面对不确定性，你依然拥有一些宝贵的品质和能力。通过这个游戏，你将学会在困境中找寻自己的闪光点，用积极的心态去面对生活的挑战。在这个过程中，你将体验到一种奇妙的转变，仿佛把烦恼变成了自己的好朋友和帮手。

心理学小秘密：这个游戏运用了认知重构的原理，通过改变你对问题的看法和态度，帮助你以更积极、更乐观的心态面对生活中的挑战。

游戏2 怕怕不怕
你是不是总觉得有些烦恼像怪兽一样可怕，让你不敢面对？别担心，这次我们要一起勇敢地挑战这些"怪兽"！在"怕怕不怕大冒险"中，你将有机会直面自己的恐惧和不安，与它们进行一场激烈的较量。不过放心，我不是让你单打独斗哦！我会陪伴在你身边，为你提供支持和鼓励。在这个过程中，你将发现自己的勇气和力量原来比想象中更强大！而且，当你成功战胜这些"怪兽"时，那种成就感和自信心简直无法用言语来形容！

在这个游戏中，我们将一起挖掘你内心深处对于${this.userProblem}的恐惧。不要担心，这些恐惧并不是坏事，它们其实是隐藏在你内心深处的宝藏，等待着你去发掘和转化。通过勇敢地面对这些恐惧，你将学会将它们转化为积极的能量，为自己的未来找到更明确的方向。这个游戏将帮助你打破束缚，释放出内心的潜能。

心理学小秘密：这个游戏基于情绪认知理论，通过帮助你识别和理解自己的情绪，尤其是隐藏在烦恼背后的恐惧和不安，让你更加了解自己，更加勇敢地面对生活中的挑战。

游戏3 现在就要
你是不是总觉得自己的梦想遥不可及，或者有些目标总是难以实现？其实，很多时候我们缺少的并不是能力，而是行动力和决心。在"现在就要行动啦"这个游戏中，我们将一起探索你的内在需求和动力源泉，找到推动你前进的那股力量。我会引导你深入思考自己的目标和梦想，并帮助你制定切实可行的行动计划。相信我，当你明确了自己的方向并付诸行动时，你会发现整个世界都在为你让路！

在这个游戏中，你将思考自己真正需要什么，以及如何通过行动去实现这些需求。${this.userProblem}固然令人困扰，但更重要的是我们内心的满足和幸福。通过这个游戏，你将学会倾听自己的内心声音，找到真正让自己感到满足和幸福的事物，并为之付出努力。这样，你将能够在面对困扰的同时，也不忘内心的需求，过上更加充实和平衡的生活。

心理学小秘密：这个游戏运用了自我决定理论，强调了个体的内在需求和动机对行为的重要性。通过明确自己的目标和需求，你将更有动力去实现自己的梦想和追求。

游戏4 夸夸温泉
你是不是总觉得自己不够好，或者缺乏自信？其实，每个人都有自己独特的闪光点和优点。在"夸夸温泉"中，我会引导你发现自己身上那些被忽视的优点和品质，让你重新认识自己，找回自信和自尊。相信我，在这个过程中你一定会感到无比愉悦和满足！

在这个游戏中，我们将一起回顾你在面对${this.userProblem}时的积极表现和重要品质。我会帮助你发现自己的闪光点和价值，让你更加自信和坚定地面对生活的挑战。同时，你也会学会用更加积极和乐观的心态去看待自己和他人，从而建立更加健康和积极的人际关系。通过这个游戏，你将体验到被认可和赞赏的喜悦，重新认识自己的价值和能力。

心理学小秘密：夸夸温泉基于积极心理学的原理，通过强化个体的积极体验和品质，提升心理韧性和幸福感。在这个游戏中，你将感受到自己的价值和能力，更加自信地面对生活中的挑战。

游戏5 问题迷宫
你是不是觉得自己的生活中充满了困惑和谜团，不知道该如何解决？别担心，这次我们要一起进入"问题迷宫"探险！在这个充满神秘和挑战的迷宫中，你将有机会直面自己的困惑和难题，并通过一系列有趣的探索和思考找到答案。我会陪伴在你身边，为你提供指导和支持，帮助你找到走出迷宫的那条路。相信我，当你成功走出迷宫时，那种成就感和自豪感简直无法用言语来形容！

在这个游戏中，我们将一起探索你对于${this.userProblem}的困惑和疑虑。通过一系列精心设计的提问，你将逐渐找到问题的根源，并找到解决问题的方法。这个过程将帮助你跳出固有的思维模式，用全新的视角去看待问题，从而找到更加有效的解决方案。这个游戏将帮助你理清思路，找到前进的方向，让你在面对困境时更加从容和自信。

心理学小秘密：问题迷宫游戏运用了问题解决的心理学原理，通过系统地分析和探索问题，帮助你找到解决问题的途径和方法。

这不仅仅是一场游戏，我觉得还会是一次心灵的疗愈和成长之旅！${this.userName}要不要来一起，探索自我，消解烦恼，期待和你一起开启这场奇妙的疗愈之旅哦~`;
        resolve(report);
      }, 1000);
    });
  }
} 