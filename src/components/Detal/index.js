import React from "react";
import "./index.css";
import axios from 'axios';
import ReactSwipe from 'react-swipe';
class Detal extends React.Component{
    constructor(props){
        super(props);
        this.state={
            swipelist:[]
        }
    }
    render(){
        return <div id="detal">
          <ReactSwipe className="carousel" swipeOptions={{auto:2000,continuous:false}} key={this.state.swipelist.length}>
            {
              this.state.swipelist.map(item=>{
              return <img src={item.img_url} key={item.id}/>
              })
            }
          </ReactSwipe>
          <aside>
          <p>一元居酒屋 MOTO 单人鳗鱼饭<i class="iconfont">&#xe613;</i></p>
          <p>当日现杀鲜活鳗鱼入料</p>
          <p>158元<span>/位</span> <span>￥238</span><span>|</span><span>随时退</span></p>
          </aside>
          <section>
              <h3>商品详情</h3>
              <p></p>
              <p>一元居酒屋 MOTO</p>
              <p>
              <i class="iconfont">&#xe619;</i>
               <span>我去 </span>
               <i class="iconfont">&#xe614;</i>
              </p>
              <p>
              <i class="iconfont">&#xe619;</i>
               <span>我去 </span>
               <i class="iconfont">&#xe614;</i>
              </p>
          </section>

          <section>
              <h3>用户评价</h3>
              <p></p>
              <ul>
              <li>
                <img src="https://image.ricebook.com/business/22268466523070?imageView2/2/w/60/h/60|watermark/1/image/aHR0cHM6Ly9kbi1pbWctc2VyaW91c2FwcHMucWJveC5tZS93bS5wbmc=/dissolve/100/gravity/SouthEast/ws/.1"/>
                <span>ln1wy1</span>
              </li>
              <li>
                <span>菜品质量 5.0 | 就餐环境 5.0 | 餐厅服务 5.0 </span>
              </li>
              <li>
                 <span>服务周到</span>
                 <span>餐具精美</span>
                 <span>干净卫生</span>
                 <span>食材新鲜</span>
                 <span>好吃</span>
                 <span>好吃</span>
              </li>
              <li>鳗鱼饭上来是满满当当，放在便当样的木制饭盒里，很有日式的风格，而且入口香而不腻，鱼皮焦香搭配上恰到好处的脂肪，果然是活杀才有的鲜甜口感啊！配上可以自己添加的酱汁和七味粉，大大的推荐！</li>
              <li>
              <img src="https://image.ricebook.com/feedback/1510209669340002?imageView2/2/w/210/h/210|watermark/1/image/aHR0cHM6Ly9kbi1pbWctc2VyaW91c2FwcHMucWJveC5tZS93bS5wbmc=/dissolve/100/gravity/SouthEast/ws/.1"/>
              <img src="https://image.ricebook.com/feedback/1510209670340001?imageView2/2/w/210/h/210|watermark/1/image/aHR0cHM6Ly9kbi1pbWctc2VyaW91c2FwcHMucWJveC5tZS93bS5wbmc=/dissolve/100/gravity/SouthEast/ws/.1"/>
              <img src="https://image.ricebook.com/feedback/1510209671340002?imageView2/2/w/210/h/210|watermark/1/image/aHR0cHM6Ly9kbi1pbWctc2VyaW91c2FwcHMucWJveC5tZS93bS5wbmc=/dissolve/100/gravity/SouthEast/ws/.1"/></li></ul>
               <p>
               <span>我去 </span>
               <i class="iconfont">&#xe614;</i>
              </p>
          </section>
           <section>
              <h3>MENU</h3>
              <p></p>
           </section>
        </div>
    }
   componentDidMount(){
    axios("/product/info/product_detail.json?product_id=1004528&sub_product_id=5008577").then(res=>{
        console.log(res.data.basic.product_images)
      this.setState({
        swipelist:res.data.basic.product_images
      })
    })

    }
}

export default Detal;