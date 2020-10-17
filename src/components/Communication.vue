<template>
  <div id="communition">
    <div class="each_option" v-for="(option,index) in options" :key="index">
      <header>
        <img :src="option.image" alt="图片无法加载" onclick="hiddenMore();" />
        <span>{{option.time}}</span>
      </header>
      <!-- <div class="content"> -->
      <h3>{{option.title}}</h3>
      <p class="my_option" :len="option">{{option.content}}</p>
      <!-- </div> -->
      <div class="footer">
        <span class="up">{{option.up}}</span>
        <span class="down">{{option.down}}</span>
        <span class="response">{{option.response}}</span>
      </div>
    </div>
    <div class="addArticle" @click="addOption">
      <span>+</span>
    </div>
    <div class="write">
      <input type="text" placeholder="标题:" class="option_title" />
      <textarea
        name="write_option"
        id="write_option"
        cols="30"
        rows="10"
        placeholder="正文:"
        class="option_text"
      ></textarea>
      <input type="button" @click="successAdd" value="确定" />
      <input type="button" @click="defaultAdd" value="取消" />
    </div>
  </div>
</template>

<script>
import test_head_img from "../assets/logo.png";
let options = [
  {
    image: test_head_img,
    time: "2020-08-06",
    title: "浅谈简爱中的一些因素",
    content: `"推荐给所有女性的必读书——《简爱》
12月3日，我观看了国家大剧院版本的话剧《简爱》。从剧院中走出，我的心久久不能平静，想着总该是要写些什么东西的。
首先是演出。作为国家顶尖的话剧演出团体，本剧的演员，布景，灯光，舞美的无可挑剔。尤其是女主角袁泉，完全演绎出了简爱这么一位坚强、独立、敢爱敢恨的女性的内心世界，优雅的谈吐气质和温柔的女性美更被刻画得入木三分。加上她本身就具有的西方化的面庞，对简爱的演绎达到了完美的境界。倘若说一千个观众心中就有一千个简爱。我想，那个晚上的“简爱”，是不会比一千多观众心中的任何一个简爱有哪怕一丁点逊色的。
其次我要讲的是这本书本身，《简爱》被称为英语文学中文字最优美的小说之一，在我有限地所知里，这个评价是恰如其分的。文中的对景物心理的描写，大多措辞优美，行文流畅，仿佛是诗篇一般，细读起来，有齿颊留香的感受。我在这里不列举那个已经耳熟能详的片段，那个为平等的爱情而发出的呐喊：
“——你难道以为，因为我贫穷、低微、不美、瘦小，我就没有灵魂没有心了吗？……”，而以下面的这段描写作为我最乐意的推荐的对象：
“到现在我结婚已有十年了。我知道一心跟我在世上最爱的人在一起生活，为他而生活是怎么回事。我认为自己无比幸福，幸福到难以用语言形容，因为我完全是我丈夫的生命，正像他完全是我的生命一样。没有哪个女人比我更亲近丈夫，更完完全全是他的骨中的骨、肉中的肉了。我跟我的爱德华在一起，永远不会感到厌倦，正像我们俩各自对自己胸膛中那颗心的跳动永远不会厌倦一样，因而我们总是厮守在一起。对我们来说，守在一起既像独处时一样自由，又像在伙伴们中间一样欢乐。我想我们整天都在交谈，而互相交谈只不过是一种更加生动活跃、可以听见的思考罢了。我把全部信赖都交给了他，他把全部信赖都献给了我。我们的性情正好相投，结果自然是完美的和谐。”
与文字上的优美相比，简爱这本书的精神内核，也就是对简爱的高贵人格的发扬和赞颂，她的真挚的情感的褒扬，是更加值得肯定的。为了更好地理解这些，我想有必要提醒读者去了解一下本书的时代背景。
维多利亚时代是英国历史上的辉煌时代，在这个时期，英国的经济飞速发展，社会贫富差距急剧扩大。各个社会阶层出现明显分野，劳工阶层，中产阶层，富豪和贵族阶层，有着完全不同的经济背景，从而形成完全不同的生活方式，并彼此充满歧视与偏见，门第观念根深蒂固，另外一方面，女性地位低下，被定位为“相夫教子”的工具，在家庭中侍奉丈夫，亲自或者指挥女仆操持家务，教育子女被认为女性天生的和唯一的使命。这实际上就是女性彻底放弃独立性，以依附于家庭和男性为生存方式。这种社会的大背景和女性观，婚姻观的结合，剥夺女性所有选择命运的权利，她们留下的唯一出路就是嫁给一个相同阶层，经济条件比较好的男性，功利婚姻成为婚姻的主流。女性所能做的想尽一切办法学习取悦和吸引男性的技巧，以便将来在婚姻市场上拍出个好价钱，或者最低限度能够找到买家，顺利售出。而如果未能婚配的女性，则被视为“古怪”的，“多余的人”，面临无人关怀，无人赡养，更不被理解的悲惨境地。"`,
    up: 20,
    down: 2,
    response: 3,
  },
  {
    image: test_head_img,
    time: "2020-08-06",
    title: "浅谈简爱中的一些因素",
    content: `"推荐给所有女性的必读书——《简爱》
12月3日，我观看了国家大剧院版本的话剧《简爱》。从剧院中走出，我的心久久不能平静，想着总该是要写些什么东西的。
首先是演出。作为国家顶尖的话剧演出团体，本剧的演员，布景，灯光，舞美的无可挑剔。尤其是女主角袁泉，完全演绎出了简爱这么一位坚强、独立、敢爱敢恨的女性的内心世界，优雅的谈吐气质和温柔的女性美更被刻画得入木三分。加上她本身就具有的西方化的面庞，对简爱的演绎达到了完美的境界。倘若说一千个观众心中就有一千个简爱。我想，那个晚上的“简爱”，是不会比一千多观众心中的任何一个简爱有哪怕一丁点逊色的。
其次我要讲的是这本书本身，《简爱》被称为英语文学中文字最优美的小说之一，在我有限地所知里，这个评价是恰如其分的。文中的对景物心理的描写，大多措辞优美，行文流畅，仿佛是诗篇一般，细读起来，有齿颊留香的感受。我在这里不列举那个已经耳熟能详的片段，那个为平等的爱情而发出的呐喊：
“——你难道以为，因为我贫穷、低微、不美、瘦小，我就没有灵魂没有心了吗？……”，而以下面的这段描写作为我最乐意的推荐的对象：
“到现在我结婚已有十年了。我知道一心跟我在世上最爱的人在一起生活，为他而生活是怎么回事。我认为自己无比幸福，幸福到难以用语言形容，因为我完全是我丈夫的生命，正像他完全是我的生命一样。没有哪个女人比我更亲近丈夫，更完完全全是他的骨中的骨、肉中的肉了。我跟我的爱德华在一起，永远不会感到厌倦，正像我们俩各自对自己胸膛中那颗心的跳动永远不会厌倦一样，因而我们总是厮守在一起。对我们来说，守在一起既像独处时一样自由，又像在伙伴们中间一样欢乐。我想我们整天都在交谈，而互相交谈只不过是一种更加生动活跃、可以听见的思考罢了。我把全部信赖都交给了他，他把全部信赖都献给了我。我们的性情正好相投，结果自然是完美的和谐。”
与文字上的优美相比，简爱这本书的精神内核，也就是对简爱的高贵人格的发扬和赞颂，她的真挚的情感的褒扬，是更加值得肯定的。为了更好地理解这些，我想有必要提醒读者去了解一下本书的时代背景。
维多利亚时代是英国历史上的辉煌时代，在这个时期，英国的经济飞速发展，社会贫富差距急剧扩大。各个社会阶层出现明显分野，劳工阶层，中产阶层，富豪和贵族阶层，有着完全不同的经济背景，从而形成完全不同的生活方式，并彼此充满歧视与偏见，门第观念根深蒂固，另外一方面，女性地位低下，被定位为“相夫教子”的工具，在家庭中侍奉丈夫，亲自或者指挥女仆操持家务，教育子女被认为女性天生的和唯一的使命。这实际上就是女性彻底放弃独立性，以依附于家庭和男性为生存方式。这种社会的大背景和女性观，婚姻观的结合，剥夺女性所有选择命运的权利，她们留下的唯一出路就是嫁给一个相同阶层，经济条件比较好的男性，功利婚姻成为婚姻的主流。女性所能做的想尽一切办法学习取悦和吸引男性的技巧，以便将来在婚姻市场上拍出个好价钱，或者最低限度能够找到买家，顺利售出。而如果未能婚配的女性，则被视为“古怪”的，“多余的人”，面临无人关怀，无人赡养，更不被理解的悲惨境地。"`,
    up: 20,
    down: 2,
    response: 3,
  },
  {
    image: test_head_img,
    time: "2020-08-06",
    title: "浅谈简爱中的一些因素",
    content: `"推荐给所有女性的必读书——《简爱》
12月3日，我观看了国家大剧院版本的话剧《简爱》。从剧院中走出，我的心久久不能平静，想着总该是要写些什么东西的。
首先是演出。作为国家顶尖的话剧演出团体，本剧的演员，布景，灯光，舞美的无可挑剔。尤其是女主角袁泉，完全演绎出了简爱这么一位坚强、独立、敢爱敢恨的女性的内心世界，优雅的谈吐气质和温柔的女性美更被刻画得入木三分。加上她本身就具有的西方化的面庞，对简爱的演绎达到了完美的境界。倘若说一千个观众心中就有一千个简爱。我想，那个晚上的“简爱”，是不会比一千多观众心中的任何一个简爱有哪怕一丁点逊色的。
其次我要讲的是这本书本身，《简爱》被称为英语文学中文字最优美的小说之一，在我有限地所知里，这个评价是恰如其分的。文中的对景物心理的描写，大多措辞优美，行文流畅，仿佛是诗篇一般，细读起来，有齿颊留香的感受。我在这里不列举那个已经耳熟能详的片段，那个为平等的爱情而发出的呐喊：
“——你难道以为，因为我贫穷、低微、不美、瘦小，我就没有灵魂没有心了吗？……”，而以下面的这段描写作为我最乐意的推荐的对象：
“到现在我结婚已有十年了。我知道一心跟我在世上最爱的人在一起生活，为他而生活是怎么回事。我认为自己无比幸福，幸福到难以用语言形容，因为我完全是我丈夫的生命，正像他完全是我的生命一样。没有哪个女人比我更亲近丈夫，更完完全全是他的骨中的骨、肉中的肉了。我跟我的爱德华在一起，永远不会感到厌倦，正像我们俩各自对自己胸膛中那颗心的跳动永远不会厌倦一样，因而我们总是厮守在一起。对我们来说，守在一起既像独处时一样自由，又像在伙伴们中间一样欢乐。我想我们整天都在交谈，而互相交谈只不过是一种更加生动活跃、可以听见的思考罢了。我把全部信赖都交给了他，他把全部信赖都献给了我。我们的性情正好相投，结果自然是完美的和谐。”
与文字上的优美相比，简爱这本书的精神内核，也就是对简爱的高贵人格的发扬和赞颂，她的真挚的情感的褒扬，是更加值得肯定的。为了更好地理解这些，我想有必要提醒读者去了解一下本书的时代背景。
维多利亚时代是英国历史上的辉煌时代，在这个时期，英国的经济飞速发展，社会贫富差距急剧扩大。各个社会阶层出现明显分野，劳工阶层，中产阶层，富豪和贵族阶层，有着完全不同的经济背景，从而形成完全不同的生活方式，并彼此充满歧视与偏见，门第观念根深蒂固，另外一方面，女性地位低下，被定位为“相夫教子”的工具，在家庭中侍奉丈夫，亲自或者指挥女仆操持家务，教育子女被认为女性天生的和唯一的使命。这实际上就是女性彻底放弃独立性，以依附于家庭和男性为生存方式。这种社会的大背景和女性观，婚姻观的结合，剥夺女性所有选择命运的权利，她们留下的唯一出路就是嫁给一个相同阶层，经济条件比较好的男性，功利婚姻成为婚姻的主流。女性所能做的想尽一切办法学习取悦和吸引男性的技巧，以便将来在婚姻市场上拍出个好价钱，或者最低限度能够找到买家，顺利售出。而如果未能婚配的女性，则被视为“古怪”的，“多余的人”，面临无人关怀，无人赡养，更不被理解的悲惨境地。"`,
    up: 20,
    down: 2,
    response: 3,
  },
];
export default {
  name: "Communication",
  data() {
    return {
      title: "论坛",
      options: options,
      img: test_head_img,
    };
  },
  methods: {
    hiddenMore() {
      console.log(1);
    },
    addOption() {
      let write = document.getElementsByClassName("write")[0];
      write.style.display = "block";
      let addArticle = document.getElementsByClassName("addArticle")[0];
      addArticle.style.display = "none";
    },
    successAdd() {
      let write = document.getElementsByClassName("write")[0];
      let option_title = document.getElementsByClassName("option_title")[0]
        .value;
      let option_text = document.getElementsByClassName("option_text")[0].value;
      let communition = document.getElementById("communition");
      let new_option = `
      <header>
        <img src="${test_head_img}" alt="图片无法加载" onclick="hiddenMore();" />
        <span>2020-8-9</span>
      </header>
      <h3>${option_title}</h3>
      <p class="my_option" :len="option">${option_text}</p>
      <div class="footer">
        <span class="up">0</span>
        <span class="down">0</span>
        <span class="response">0</span>
      </div>
        `;
      write.style.display = "none";
      //   communition.innerHTML += new_option;
      var newNode = document.createElement("div");
      newNode.className = "each_option";
      newNode.innerHTML = new_option;
      communition.appendChild(newNode);
      let addArticle = document.getElementsByClassName("addArticle")[0];
      addArticle.style.display = "block";
      //   this.$nextTick(()=>{
      //     let addArticle = document.getElementsByClassName("addArticle")[0];
      //     addArticle.style.display = "block";
      //     // console.log(addArticle);
      //     console.log(this);
      //   });
    },
    defaultAdd() {
      let write = document.getElementsByClassName("write")[0];
      write.style.display = "none";
      let addArticle = document.getElementsByClassName("addArticle")[0];
      addArticle.style.display = "block";
    },
  },
  mounted: function () {
    let myOption = document.getElementsByClassName("my_option");
    for (var i = 0; i < myOption.length; i++) {
      let totalWords = myOption[i].innerHTML; //内容
      var totallen = totalWords.length; //内容长度
      var needcols = 4; //需要显示的行数
      let newStr;
      if (totallen / 20 > needcols) {
        newStr =
          totalWords.substring(0, needcols * 20) +
          "...<span class='get_more' style='color:rgb(98,150,190)'>更多</span>";
        myOption[i].innerHTML = newStr;
      }

      let get_more = document.getElementsByClassName("get_more");
      get_more[i].onclick = function () {
        this.parentNode.style.height = totallen + "px";
        this.parentNode.innerHTML =
          totalWords +
          "<span id='hidden_more' onclick='console.log(1);' style='color:gray'>收起</span>";
      };
    }
  },
};
</script>