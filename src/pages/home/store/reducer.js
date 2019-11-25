import { fromJS } from 'immutable';
// 转化对象
const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl:
        'https://pic1.zhimg.com/v2-3b4fc7e3a1195a081d0259246c38debc_1200x500.jpg'
    },
    {
      id: 2,
      title: '手绘',
      imgUrl:
        'https://pic1.zhimg.com/v2-3b4fc7e3a1195a081d0259246c38debc_1200x500.jpg'
    }
  ],
  articleList: [
    {
      id: 1,
      desc:
        '假设你是一位女性，你有一位男朋友，于此同时你和另外一位男生暧昧不清，比朋友好，又不是恋人。你随时可以甩了现任男友，另外一位马上就能补上。这是冷备...',
      title: '世上最污技术解读，你秒懂了吗？',
      imgUrl:
        'https://pic1.zhimg.com/v2-3b4fc7e3a1195a081d0259246c38debc_1200x500.jpg'
    },
    {
      id: 2,
      title: '这10个摄影技巧，与你的相机好坏无关！',
      desc:
        '图文来源网络，版权归原作者所有 在单反横行的时代，拼像素拼贵成为了许多摄影人的坏毛病。在比较这些之前，有没有先想过你的摄影技术如何？你是否能驾驭...',
      imgUrl:
        'https://pic1.zhimg.com/v2-3b4fc7e3a1195a081d0259246c38debc_1200x500.jpg'
    }
  ],
  recommendList: [
    {
      id: 1,
      imgUrl:
        'https://www.chandashi.com/blog/wp-content/uploads/2017/04/4_%E5%89%AF%E6%9C%AC.png'
    },
    {
      id: 2,
      imgUrl:
        'https://www.chandashi.com/blog/wp-content/uploads/2017/04/4_%E5%89%AF%E6%9C%AC.png'
    },
    {
      id: 3,
      imgUrl:
        'https://www.chandashi.com/blog/wp-content/uploads/2017/04/4_%E5%89%AF%E6%9C%AC.png'
    },
    {
      id: 4,
      imgUrl:
        'https://www.chandashi.com/blog/wp-content/uploads/2017/04/4_%E5%89%AF%E6%9C%AC.png'
    }
  ]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
