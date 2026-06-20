export interface Character {
  id: string;
  name: string;
  age: string | number;
  gender: string;
  job: string;
  imei: string;
  race: string;
  faction: 'Blanc' | 'Noir' | 'Gris';
  quote: string;
  appearance?: string;
  personality?: string;
  traits?: string;
  imageUrl?: string;
}

export const worldview = {
  title: "마법소녀 공생론",
  description: `이 세계의 사람들은 저마다 가슴속에 하나의 형체를 품고 살아간다.

누군가의 것은 유리구슬처럼 맑고, 누군가의 것은 오래된 나무의 나이테처럼 촘촘하다. 기쁠 때 따스하게 빛나고, 슬플 때 차갑게 수축하는 그것을, 사람들은 '마음의 형체'라 부른다. 대부분의 인간은 자신의 가슴 안에 그런 것이 있다는 사실조차 모른 채 평범하게 웃고, 울고, 사랑하며 살아간다.

하지만 밤이 깊어지면, 도시의 이면에서 무언가가 꿈틀댄다.

누아르. 인간의 위선을 혐오하는 자들. 그들은 사람의 마음을 갉아먹는다. 천천히, 조금씩. 갉아먹힌 자는 점점 무감각해지고, 결국 아무것도 느끼지 못하는 빈 껍데기가 된다. 거리에서 스쳐 지나가는 텅 빈 눈의 사람들. 그 원인을 아는 자는 극히 드물다.

그 어둠에 맞서는 것이 '블랑'이다. 구원의 나비를 매개로 변신하는 마법소녀와 마법사들. 그들은 낮에는 학생으로, 의사로, 평범한 청춘으로 살아가면서, 밤이면 누아르의 침식으로부터 사람들의 마음을 지킨다.

그리고 또 하나의 세력, 그리즈. 마음을 파괴하지도, 지키지도 않는다. 그들은 인간의 감정을 아름다운 전시물이라 여기며, 빼앗아 유리 속에 가둔다. 사랑이라는 이름으로.

이 모든 것의 중심에, 생명의 나무가 있다. 초대 마법소녀의 영혼이 깃든 신성한 존재. 그 나무가 빛을 발할 때, 신탁이 내려온다.

지금껏 그 신탁은 미나카미 릿카를 가리키고 있었다. 세상을 구원할 유일한 마법소녀라고,

—그랬어야 했다.`,
  elements: [
    {
      title: "이메이",
      content: "마력을 지닌 자들에게 주어지는 이명(異名)이다."
    },
    {
      title: "블랑",
      content: "구원의 나비의 힘을 빌려 세상을 구하는 마법소녀와 마법사들. 누아르로부터 사람들을 구하는 사명을 띤다."
    },
    {
      title: "누아르",
      content: "마음의 형체를 갉아먹는 존재들. 인간의 위선적인 면을 혐오하여 그들의 마음을 소멸시키려 한다."
    },
    {
      title: "그리즈",
      content: "인간의 마음을 소멸시키는 대신 빼앗아 그들의 성에 전시하는 해괴한 목적을 가진다. 인간의 마음을 관상용으로 생각한다."
    },
    {
      title: "생명의 나무",
      content: "초대 마법소녀의 영혼이 깃든 생명목. 주변은 구원의 나비와 꽃들로 이루어져 있으며, 빛을 발화하며 신탁을 내린다."
    },
    {
      title: "크리살리드 캐슬",
      content: "마왕 '카르밀라'가 군주인 지하 깊숙한 곳의 성. 마물 군단이 거주하며 불길하고 어둡다. 누아르의 본거지이다."
    },
    {
      title: "파피에 팰리스",
      content: "그리즈들이 인간의 마음을 전시하는 블랙 앤 화이트 톤의 고딕풍 저택이다."
    }
  ],
  magic: [
    {
      title: "구원의 나비 (백마법)",
      content: "속성: 빛, 얼음, 치유, 정화, 강철, 광역(나비 떼) 등"
    },
    {
      title: "낙원의 나비 (흑마법)",
      content: "속성: 흡혈, 저주, 환각, 가시, 맹독, 광역(나비 떼) 등"
    }
  ]
};

export const characters: Character[] = [
  // Blanc
  {
    id: "rikka",
    name: "미나카미 릿카",
    age: 22,
    gender: "女",
    job: "마법소녀",
    imei: "네쥬",
    race: "인간",
    faction: "Blanc",
    quote: "반가워! 같이 힘내보자, 응?",
    imageUrl: "https://i.postimg.cc/N0nf9vHB/2.png"
  },
  {
    id: "leon",
    name: "토키사카 레온",
    age: 23,
    gender: "男",
    job: "마법사",
    imei: "오브",
    race: "인간",
    faction: "Blanc",
    quote: "……필요한 게 있으면 말해. 한 번만.",
    imageUrl: "https://i.postimg.cc/pXMrJv12/2.png"
  },
  {
    id: "rihito",
    name: "유메지 리히토",
    age: 28,
    gender: "男",
    job: "마법사",
    imei: "르외르",
    race: "인간",
    faction: "Blanc",
    quote: "무리하지 마. 네 몸이 먼저야.",
    imageUrl: "https://i.postimg.cc/sgw2zhfj/2.png"
  },
  {
    id: "haruhi",
    name: "아마하라 하루히",
    age: 20,
    gender: "女",
    job: "마법소녀",
    imei: "소늄",
    race: "인간",
    faction: "Blanc",
    quote: "저기, 혹시 그 가게 크레이프 먹어보셨어요? 진짜 맛있거든요!",
    imageUrl: "https://i.postimg.cc/HxfxK1Yb/2.png"
  },
  {
    id: "shou",
    name: "쇼우",
    age: "불명",
    gender: "女",
    job: "생명의 나무 수호자",
    imei: "없음",
    race: "불명",
    faction: "Blanc",
    quote: "잘 왔구나. 이곳의 바람이 너를 반기고 있단다.",
    imageUrl: "https://i.postimg.cc/B6g408Gj/syo2.png"
  },
  {
    id: "lira",
    name: "리라",
    age: "불명",
    gender: "女",
    job: "생명의 나무 인도자",
    imei: "없음",
    race: "불명",
    faction: "Blanc",
    quote: "어서 오세요! 제가 안내해드릴게요, 따라오시면 돼요!",
    imageUrl: "https://i.postimg.cc/PrnzcP5c/14.png"
  },

  // Noir
  {
    id: "croa",
    name: "크로아",
    age: "불명",
    gender: "女",
    job: "타락마법소녀",
    imei: "파피용",
    race: "임프(소악마)",
    faction: "Noir",
    quote: "흐응, 또 하나 늘었어? 재미있겠네.♡",
    imageUrl: "https://i.postimg.cc/XvYpBg1n/2.png"
  },
  {
    id: "chiyoko",
    name: "치요코",
    age: 327,
    gender: "女",
    job: "타락마법소녀",
    imei: "륀",
    race: "키츠네(여우요괴)",
    faction: "Noir",
    quote: "……관심 없어.",
    imageUrl: "https://i.postimg.cc/66k2bnqk/2.png"
  },
  {
    id: "carmilla",
    name: "카르밀라",
    age: 845,
    gender: "女",
    job: "마왕",
    imei: "없음",
    race: "악마",
    faction: "Noir",
    quote: "어머, 귀여운 아이가 또 한 명. 환영해, 소중히 다뤄줄게.",
    imageUrl: "https://i.postimg.cc/85wJn0Fq/2.png"
  },
  {
    id: "gaia",
    name: "히스이 가이아",
    age: 37,
    gender: "男",
    job: "흑마법사",
    imei: "헤브",
    race: "인간",
    faction: "Noir",
    quote: "잡담은 사양한다. 용건만 말해.",
    imageUrl: "https://i.postimg.cc/k5J7hXxd/2.png"
  },

  // Gris
  {
    id: "vanitas",
    name: "바니타스",
    age: "불명",
    gender: "女",
    job: "타락마법소녀",
    imei: "릴리",
    race: "인형",
    faction: "Gris",
    quote: "......당신은 왜 웃고 있어?",
    imageUrl: "https://i.postimg.cc/3RwJWJRc/2-artist-bloodybeni-1-6-artist-mery-(yangmalgage)-1-4-artist-qianben-sh-s-3634838329.png"
  },
  {
    id: "hayato",
    name: "하야토",
    age: 583,
    gender: "男",
    job: "흑마법사",
    imei: "없음",
    race: "악마",
    faction: "Gris",
    quote: "어서 오십시오. 차 한 잔 드시겠습니까?",
    imageUrl: "https://i.postimg.cc/sX8yXYbG/2.png"
  },
  {
    id: "gabriel",
    name: "가브리엘",
    age: 29,
    gender: "男",
    job: "흑마법사",
    imei: "엘르",
    race: "인간",
    faction: "Gris",
    quote: "여자? 남자? ……아, 여자라면 환영이지.",
    imageUrl: "https://i.postimg.cc/XYFZ0JGN/2.png"
  }
];
